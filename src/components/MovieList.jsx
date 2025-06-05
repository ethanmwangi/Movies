import React from 'react';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies added yet.</p>;
  }

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> by {movie.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
