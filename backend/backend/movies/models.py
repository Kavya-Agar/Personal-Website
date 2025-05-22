from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=255)
    imdb_id = models.CharField(max_length=20, unique=True)
    tmdb_id = models.IntegerField(unique=True, null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    overview = models.TextField(null=True, blank=True)
    poster_path = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title
    def save(self, *args, **kwargs):
        # Custom save logic if needed
        super().save(*args, **kwargs)
        # Additional logic after saving
        # e.g., fetch and save TMDB data
        # tmdb_data = fetch_tmdb_by_imdb(self.imdb_id)
        # if tmdb_data:
        #     self.tmdb_id = tmdb_data.get('id')
        #     self.release_date = tmdb_data.get('release_date')
        #     self.overview = tmdb_data.get('overview')
        #     self.poster_path = tmdb_data.get('poster_path')
        #     super().save(*args, **kwargs)
        # else:
        #     raise ValueError("TMDB data not found for the given IMDb ID")
#         # Call the parent class's save method
#         super().save(*args, **kwargs)
#
#     # Add any additional logic you want to execute after saving
#     # For example, you can log the save operation or perform other actions
#         print(f"Movie '{self.title}' saved with TMDB ID: {self.tmdb_id}")