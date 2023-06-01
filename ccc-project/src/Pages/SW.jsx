import React from 'react';
import { Link } from 'react-router-dom';
import starwar from "../img/StarWar.jpeg";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import SWmovieposter from "../img/productpage_starwar.png";
import returnbtn from "../icn/icn_return.svg";
import shortbanner from "../img/AvengersBanner_short.png";

const sw = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log('Book now clicked!');
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open('https://www.imdb.com/title/tt2488496/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_star%2520wars%2520awaken', '_blank');
  };

  return (
    <div className="sw-moviepage-container">
      <Sidebar/>
      <img src= {shortbanner} alt="Movie Poster" className='short-banner'/>

        <div className="movie-heading-div">
          <div className="heading-container">
           <Link to="/" className='return-button'><img src={returnbtn} /></Link>
            <p className="heading-text">Top Rated Movie: Star Wars: The Force Awakens</p>
          </div>
        </div>

        <div className='movie-description'>
          {/*<Link to="/" className='return-button'>Return to Homepage</Link>*/}
        
          <img src= {SWmovieposter} alt="Movie Poster" className='sw-movie-poster-left'/>
          {/*<img src= {starwar} alt="Movie Poster" className='poster-image'/>*/}

          <div className="movie-text-content">
            <h2 className='movie-title'>Star Wars: Episode VII - The Force Awakens</h2>
            <div className = 'movie-details'>
            <p>As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.</p>
            
            <hr className="separator"/>

            <table className="movie-info-table">
              <tr className="pad-top">
                <th>Show Date</th>
                <td>May 31, 2023</td>
              </tr>

              <tr>
                <th>Genre</th>
                <td>Action | Adventure | Sci-Fi</td>
              </tr>

              <tr>
                <th>Director</th>
                <td>JJ Abrams</td>
              </tr>

              <tr>
                <th>Starring</th>
                <td>Daisy Ridley, Oscar Issac, Harrison Ford, Carrie Fisher</td>
              </tr>

              <tr >
                <th>Veune</th>
                <td className='pad-bot'>
                  <select className='veune-dropdown'>
                    <option value="venue1">IFC Cinema</option>
                    <option value="venue2">K11 Musea Cinema</option>
                    <option value="venue3">Times Square Cinema</option>
                 </select>
                </td>
              </tr>

            </table>

            {/*<p>Show Date: May 31, 2023</p>
            <p>Genre: Action, Adventure, Sci-Fi</p>
            <p>Director: JJ Abrams</p>
            <p>Starring: Daisy Ridley, Oscar Issac, Harrison Ford, Carrie Fisher</p>*/}
          </div>

            {/* <select className='veune-dropdown'>
              <option value="venue1">IFC Cinema</option>
              <option value="venue2">K11 Musea Cinema</option>
              <option value="venue3">Times Square Cinema</option>
            </select> */}

            <div className="button-container">
              <button onClick={handleBookNow} className="book-now-button">Book Now</button>
              <button onClick={handleIMDb} className="imdb-button">IMDb</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default sw;
