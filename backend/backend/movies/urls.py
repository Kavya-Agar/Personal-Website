from django.urls import path
from .views import MovieSearchView
from . import views

urlpatterns = [
    path('api/search/', views.search_view, name='search_view'),
    path('api/movies/', MovieSearchView.as_view(), name='movie_search'),
]
