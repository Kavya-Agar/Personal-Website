from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.views import View
from django.urls import path
import os
from django.conf import settings
import re
from .models import Movie

from dotenv import load_dotenv
load_dotenv()
import os

TMDB_API_KEY = os.getenv('TMDB_API_KEY')

def is_imdb_id(line):
    # Accepts any string that starts with 'tt' and is followed by digits (IMDb IDs)
    return bool(re.match(r'^tt\d+$', line.strip()))

def fetch_tmdb_details_by_imdb(imdb_id):
    # Use /find endpoint to get TMDb IDs
    find_url = f"https://api.themoviedb.org/3/find/{imdb_id}"
    params = {
        "api_key": TMDB_API_KEY,
        "external_source": "imdb_id"
    }
    find_response = requests.get(find_url, params=params)
    if find_response.status_code != 200:
        return {"error": "Failed to fetch data from TMDB"}
    find_data = find_response.json()

    if find_data.get('movie_results') and len(find_data['movie_results']) > 0:
        tmdb_id = find_data['movie_results'][0]['id']
        details_url = f"https://api.themoviedb.org/3/movie/{tmdb_id}"
        params = {"api_key": TMDB_API_KEY}
        media_type = "movie"
    elif find_data.get('tv_results') and len(find_data['tv_results']) > 0:
        tmdb_id = find_data['tv_results'][0]['id']
        details_url = f"https://api.themoviedb.org/3/tv/{tmdb_id}"
        params = {"api_key": TMDB_API_KEY, "append_to_response": "external_ids"}
        media_type = "tv"
    else:
        return {"error": f"No results found for '{imdb_id}'"}

    details_response = requests.get(details_url, params=params)
    if details_response.status_code != 200:
        return {"error": "Failed to fetch details from TMDB"}
    details_data = details_response.json()

    # For TV, get imdb_id from external_ids
    imdb_id_val = details_data.get("imdb_id")
    if not imdb_id_val and media_type == "tv":
        ext_ids = details_data.get("external_ids", {})
        imdb_id_val = ext_ids.get("imdb_id")

    # Get runtime/episode_run_time safely
    runtime = None
    if media_type == "movie":
        runtime = details_data.get("runtime")
    else:
        episode_run_time = details_data.get("episode_run_time", [])
        if episode_run_time:
            runtime = episode_run_time[0]

    return {
        "title": details_data.get("title") or details_data.get("name"),
        "type": media_type,
        "length": runtime,
        "language": details_data.get("original_language"),
        "synopsis": details_data.get("overview"),
        "imdb_id": imdb_id_val,
        "tmdb_rating": details_data.get("vote_average"),
        "genres": ", ".join([g["name"] for g in details_data.get("genres", [])]),
        "poster_url": f"https://image.tmdb.org/t/p/original{details_data.get('poster_path')}" if details_data.get("poster_path") else None,
    }

def fetch_tmdb_by_title(title):
    # Try movie search first
    url = "https://api.themoviedb.org/3/search/movie"
    params = {
        "api_key": TMDB_API_KEY,
        "query": title
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        if data.get('results'):
            tmdb_id = data['results'][0]['id']
            return fetch_tmdb_details_by_tmdb_id(tmdb_id, "movie")
    # Try TV search if no movie found
    url = "https://api.themoviedb.org/3/search/tv"
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        if data.get('results'):
            tmdb_id = data['results'][0]['id']
            return fetch_tmdb_details_by_tmdb_id(tmdb_id, "tv")
    return {"error": f"No results found for '{title}'"}

def fetch_tmdb_details_by_tmdb_id(tmdb_id, media_type):
    if media_type == "movie":
        details_url = f"https://api.themoviedb.org/3/movie/{tmdb_id}"
        params = {"api_key": TMDB_API_KEY}
    else:
        details_url = f"https://api.themoviedb.org/3/tv/{tmdb_id}"
        params = {"api_key": TMDB_API_KEY, "append_to_response": "external_ids"}
    details_response = requests.get(details_url, params=params)
    if details_response.status_code != 200:
        return {"error": "Failed to fetch details from TMDB"}
    details_data = details_response.json()

    imdb_id_val = details_data.get("imdb_id")
    if not imdb_id_val and media_type == "tv":
        ext_ids = details_data.get("external_ids", {})
        imdb_id_val = ext_ids.get("imdb_id")

    runtime = None
    if media_type == "movie":
        runtime = details_data.get("runtime")
    else:
        episode_run_time = details_data.get("episode_run_time", [])
        if episode_run_time:
            runtime = episode_run_time[0]

    return {
        "title": details_data.get("title") or details_data.get("name"),
        "type": media_type,
        "length": runtime,
        "language": details_data.get("original_language"),
        "synopsis": details_data.get("overview"),
        "imdb_id": imdb_id_val,
        "tmdb_rating": details_data.get("vote_average"),
        "genres": ", ".join([g["name"] for g in details_data.get("genres", [])]),
        "poster_url": f"https://image.tmdb.org/t/p/original{details_data.get('poster_path')}" if details_data.get("poster_path") else None,
    }

def process_movie_list(file_path):
    results = []
    with open(file_path, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            result = {"query": line}
            if is_imdb_id(line):
                print(f"Fetching by IMDb ID: {line}")
                data = fetch_tmdb_details_by_imdb(line)
            else:
                print(f"Searching by title: {line}")
                data = fetch_tmdb_by_title(line)
            result["details"] = data
            results.append(result)
            print(result)
    return results

class MovieSearchView(View):
    def get(self, request):
        imdb_id = request.GET.get('imdb_id')
        movie_name = request.GET.get('name')

        if imdb_id:
            data = fetch_tmdb_details_by_imdb(imdb_id)
            if "error" in data:
                return JsonResponse(data, status=404)
            return JsonResponse(data)
        elif movie_name:
            data = fetch_tmdb_by_title(movie_name)
            if "error" in data:
                return JsonResponse(data, status=404)
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'No IMDb ID or movie name provided'}, status=400)

def movie_list_view(request):
    file_path = os.path.join(settings.BASE_DIR, 'movies', 'data', 'movies.txt')
    with open(file_path, 'r') as f:
        movie_names = [line.strip() for line in f if line.strip()]
    return JsonResponse({'movies': movie_names})
