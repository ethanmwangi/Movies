import React, { useState } from 'react';
import MovieList from './components/MovieList.jsx';
 // ✅ was misnamed as MovieLists
// ✅ was missing import for MovieList component
import './index.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDirector, setNewDirector] = useState('');

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDirectorChange = (e) => {
    setNewDirector(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();

    if (newTitle.trim() === '' || newDirector.trim() === '') {
      alert('Please enter both title and author.');
      return;
    }

    const newMovie = {
      id: movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1,
      title: newTitle,
      author: newDirector,
    };

    setMovies([...movies, newMovie]); // ✅ was broken before
    setNewTitle('');
    setNewDirector('');
  };

  return (
    <div>
      <h1>My Movie Collection</h1>

      <form onSubmit={addMovie}>
        <h2>Add a New Movie</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="director">Author:</label>
          <input
            type="text"
            id="director"
            value={newDirector}
            onChange={handleDirectorChange}
            required
          />
        </div>
        <button type="submit">Add movie</button>
      </form>

      <hr />

      <MovieList movies={movies} /> {/* ✅ was misnamed as MovieLists */}
    </div>
  );
}

export default App;
