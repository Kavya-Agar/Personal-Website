import os
import requests
import time

TMDB_API_KEY = os.getenv('TMDB_API_KEY')  # Set your TMDB API key as an environment variable

if not TMDB_API_KEY:
    raise Exception("Set your TMDB_API_KEY environment variable.")

BASE_SEARCH_URL = "https://api.themoviedb.org/3/search/multi"
BASE_DETAILS_URL = "https://api.themoviedb.org/3/{media_type}/{id}"

POSTER_BASE_URL = "https://image.tmdb.org/t/p/original"

script_dir = os.path.dirname(os.path.abspath(__file__))
movies_file = os.path.join(script_dir, 'data', 'movies.txt')

def fetch_movie_details(title):
    # Search for the movie/TV show
    params = {
        "api_key": TMDB_API_KEY,
        "query": title,
        "include_adult": "false",
        # "language": "en-US"
    }
    resp = requests.get(BASE_SEARCH_URL, params=params)
    if resp.status_code != 200:
        return {"error": f"Search failed for '{title}'"}
    results = resp.json().get("results")
    if not results:
        return {"error": f"No results found for '{title}'"}

    # Pick the first result
    result = results[0]
    media_type = result.get("media_type", "movie")  # could be 'movie' or 'tv'
    tmdb_id = result.get("id")

    # Fetch detailed info
    details_url = BASE_DETAILS_URL.format(media_type=media_type, id=tmdb_id)
    params = {
        "api_key": TMDB_API_KEY,
        "language": "en-US"
    }
    details_resp = requests.get(details_url, params=params)
    if details_resp.status_code != 200:
        return {"error": f"Details fetch failed for '{title}'"}
    data = details_resp.json()

    # Format genres
    genres = data.get("genres", [])
    genre_names = [g["name"] for g in genres]
    genres_str = ", ".join(genre_names)

    # Poster URL
    poster_path = data.get("poster_path")
    poster_url = POSTER_BASE_URL + poster_path if poster_path else None

    # Prepare output
    episode_run_time = data.get("episode_run_time")
    if isinstance(episode_run_time, list) and episode_run_time:
        length = episode_run_time[0]
    else:
        length = None

    details = {
        "title": data.get("title") or data.get("name"),
        "type": media_type,
        "length": data.get("runtime") or length,
        "language": data.get("original_language"),
        "synopsis": data.get("overview"),
        "imdb_id": data.get("imdb_id"),
        "tmdb_rating": data.get("vote_average"),
        "genres": genres_str,
        "poster_url": poster_url
    }
    return details

def main():
    with open(movies_file, "r") as f:
        movie_names = [line.strip() for line in f if line.strip()]

    all_details = []
    for name in movie_names:
        print(f"Fetching: {name}")
        details = fetch_movie_details(name)
        all_details.append({ "query": name, "details": details })
        print(details)
        time.sleep(0.25)  # Be polite to the API (adjust as needed)

    # Optionally, write to a file:
    import json
    with open("movie_details.json", "w") as out:
        json.dump(all_details, out, indent=2)

if __name__ == "__main__":
    main()
