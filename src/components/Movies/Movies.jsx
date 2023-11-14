import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from 'components/Api/Api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const history = useNavigate();

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await searchMovies(query);
        setResults(response.data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  const handleMovieClick = movieId => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map(movie => (
          <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
