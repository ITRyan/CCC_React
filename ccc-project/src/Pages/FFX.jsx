import React from 'react';
import { Link } from 'react-router-dom';
import starwar from "../img/FastX.jpg";
import "../App.css";

const ffx = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log('Book now clicked!');
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open('https://www.imdb.com/title/tt5433140/?ref_=nv_sr_srsg_1_tt_6_nm_1_q_fast%2520', '_blank');
  };

  return (
    <div className='movie-description'>
      <Link to="/" className='return-button'>Return to Homepage</Link>
      <div>
        <img src= {starwar} alt="Movie Poster" className='poster-image'/>
        <h2 className='movie-title'>Fast X</h2>
        <div className = 'movie-details'>
        <p>Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.</p>
        <p>Show Date: May 18, 2023</p>
        <p>Genre: Action, Adventure, Crime</p>
        <p>Director: Louis Leterrier</p>
        <p>Starring: Vin Diesel, Michelle Rodriguez, Jason Momoa</p>
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

export default ffx;
