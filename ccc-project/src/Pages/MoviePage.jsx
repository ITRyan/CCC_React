import React from 'react';

const MoviePage = (props) => {
  const { title, description, genre, director, starring, releaseDate, venue, imdbLink, img } = props;

  const handleBookNow = () => {
    // Handle book now functionality
    console.log('Book now clicked!');
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open(imdbLink, '_blank');
  };

  return (
    <div className="movie-description">
      <img src={img} className="movie-poster" />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="movie-info">
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <p>Starring: {starring}</p>
        <p>Release Date: {releaseDate}</p>
        <select value={venue} onChange={(e) => console.log(e.target.value)}>
          <option value="venue1">IFC</option>
          <option value="venue2">Times Square</option>
          <option value="venue3">K11 Musea</option>
        </select>
        <button onClick={handleBookNow}>Book Now</button>
        <button onClick={handleIMDb}>IMDb</button>
      </div>
    </div>
  );
};
export default MoviePage;
