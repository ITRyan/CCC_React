import React from "react";
import { Link } from "react-router-dom";
import starwar from "../img/StarWar.jpeg";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import SWmovieposter from "../img/productpage_jw.png";
import returnbtn from "../icn/icn_return.svg";
import shortbanner from "../img/AvengersBanner_short.png";


const jw4 = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log("Book now clicked!");
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open(
      "https://www.imdb.com/title/tt10366206/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_john%2520wick",
      "_blank"
    );
  };

  return (
    <div className="sw-moviepage-container">
      <Sidebar/>
      <img src= {shortbanner} alt="Movie Poster" className='short-banner'/>

        <div className="movie-heading-div">
          <div className="heading-container">
           <Link to="/" className='return-button'><img src={returnbtn} /></Link>
            <p className="heading-text">Top Rated Movie: John Wick: Chapter 4</p>
          </div>
        </div>

        <div className='movie-description'>
          {/*<Link to="/" className='return-button'>Return to Homepage</Link>*/}
        
          <img src= {SWmovieposter} alt="Movie Poster" className='sw-movie-poster-left'/>
          {/*<img src= {starwar} alt="Movie Poster" className='poster-image'/>*/}

          <div className="movie-text-content">
            <h2 className='movie-title'>John Wick: Chapter 4</h2>
            <div className = 'movie-details'>
            <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</p>
            
            <hr className="separator"/>

            <table className="movie-info-table">
              <tr className="pad-top">
                <th>Show Date</th>
                <td>March 24, 2023</td>
              </tr>

              <tr>
                <th>Genre</th>
                <td>Action | Crime | Thriller</td>
              </tr>

              <tr>
                <th>Director</th>
                <td>Chad Stahelski</td>
              </tr>

              <tr>
                <th>Starring</th>
                <td>Keanu Reeves, Laurence Fishburne, George Georgiou</td>
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

export default jw4;
