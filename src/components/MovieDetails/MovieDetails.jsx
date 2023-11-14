import React from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

const Cast = () => {
  return <div>Cast details</div>;
};

const Reviews = () => {
  return <div>Reviews details</div>;
};

export default MovieDetails;
