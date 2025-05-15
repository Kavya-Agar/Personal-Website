import React, { useState } from "react";
import moviesData from "/Users/kavyaagar/Personal Website/backend/backend/movies/movie_details.json";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="w-40 mx-auto rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">{movie.title}</h2>
        <div className="mb-2 text-center text-sm text-gray-500">
          {movie.genres} | {movie.language?.toUpperCase()} | {movie.length ? `${movie.length} min` : "N/A"}
        </div>
        <p className="text-gray-700 text-sm">{movie.synopsis}</p>
      </div>
    </div>
  );
}

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Favorite Movies and Shows</h1>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {moviesData.map((item, idx) => (
                <div
                    key={idx}
                    className="flex-shrink-0 w-40 cursor-pointer transform hover:scale-105 transition"
                    onClick={() => handlePosterClick(item.details)}
                    title={item.details.title}
                >
                    <img
                        src={item.details.poster_url}
                        alt={item.details.title}
                        className="rounded-lg shadow-md w-full h-60 object-cover"
                    />
                    <div className="mt-2 text-center text-sm font-medium">{item.details.title}</div>
                </div>
            ))}
        </div>
        {selectedMovie && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={handleCloseModal}
            >
                <div
                    className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                        onClick={handleCloseModal}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedMovie.poster_url}
                        alt={selectedMovie.title}
                        className="w-40 mx-auto rounded mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2 text-center">{selectedMovie.title}</h2>
                    <div className="mb-2 text-center text-sm text-gray-500">
                        {selectedMovie.genres} | {selectedMovie.language?.toUpperCase()} | {selectedMovie.length ? `${selectedMovie.length} min` : "N/A"}
                    </div>
                    <p className="text-gray-700 text-sm">{selectedMovie.synopsis}</p>
                </div>
            </div>
        )}
    </div>
  );
}
