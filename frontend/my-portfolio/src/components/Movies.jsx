import React, { useState } from "react";
import moviesData from "/Users/kavyaagar/Personal Website/backend/backend/movies/movie_details.json";

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="py-8 px-2 sm:px-4 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Favorite Movies and Shows</h1>
      {/* Carousel Wrapper */}
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center sm:space-x-6 gap-4 w-max mx-auto pb-4 scrollbar-hide">
          {moviesData.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-32 sm:w-40 cursor-pointer transform hover:scale-105 transition"
              onClick={() => handlePosterClick(item.details)}
              title={item.details.title}
            >
              <img
                src={item.details.poster_url}
                alt={item.details.title}
                className="rounded-lg shadow-md w-full h-44 sm:h-60 object-cover"
              />
              <div className="mt-2 text-center text-xs sm:text-sm font-medium truncate">
                {item.details.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div
          className="fixed inset-0 z-2000 flex items-center justify-center bg-black bg-opacity-70 px-2"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md p-4 sm:p-6 relative"
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
              className="w-32 sm:w-40 mx-auto rounded mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">{selectedMovie.title}</h2>
            <div className="mb-2 text-center text-xs sm:text-sm text-gray-500">
              {selectedMovie.genres} | {selectedMovie.language?.toUpperCase()} | {selectedMovie.length ? `${selectedMovie.length} min` : "N/A"}
            </div>
            <p className="text-gray-700 text-xs sm:text-sm">{selectedMovie.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  );
}
