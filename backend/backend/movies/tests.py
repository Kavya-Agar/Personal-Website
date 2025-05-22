from django.test import TestCase
from django.urls import reverse

class MovieViewTests(TestCase):
    def test_movie_search_view_status_code(self):
        response = self.client.get(reverse('movie_search'), {'name': 'Inception'})
        self.assertEqual(response.status_code, 200)
        # Optionally, check for expected keys in the response
        self.assertIn('title', response.json())
