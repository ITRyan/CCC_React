import React from 'react';
import { Link } from 'react-router-dom';
import starwar from "../img/JohnWick.jpg";
import "../App.css";

const jw4 = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log('Book now clicked!');
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open('https://www.imdb.com/title/tt10366206/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_john%2520wick', '_blank');
  };

  return (
    <div className='movie-description'>
      <Link to="/" className='return-button'>Return to Homepage</Link>
      <div>
        <img src= {starwar} alt="Movie Poster" className='poster-image'/>
        <h2 className='movie-title'>John Wick: Chapter 4</h2>
        <div className = 'movie-details'>
        <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</p>
        <p>Show Date: March 24, 2023</p>
        <p>Genre: Action, Crime, Thriller</p>
        <p>Director: Chad Stahelski</p>
        <p>Starring: Keanu Reeves, Laurence Fishburne, George Georgiou</p>
        </div>
        <select className='veune-dropdown'>
          <option value="venue1">IFC Cinema</option>
          <option value="venue2">K11 Musea Cinema</option>
          <option value="venue3">Times Square Cinema</option>
        </select>
        <div className="button-container">
          <button onClick={handleBookNow} className="book-now-button">Book Now</button>
          <button onClick={handleIMDb} className="imdb-button">IMDb</button>
        </div>
      </div>
    </div>
  );
};

export default jw4;
