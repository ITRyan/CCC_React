import React from "react";
import { Link } from "react-router-dom";
import starwar from "../img/StarWar.jpeg";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import SWmovieposter from "../img/productpage_FFX.png";
import returnbtn from "../icn/icn_return.svg";
import shortbanner from "../img/AvengersBanner_short.png";


const ffx = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log("Book now clicked!");
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open(
      "https://www.imdb.com/title/tt5433140/?ref_=nv_sr_srsg_1_tt_6_nm_1_q_fast%2520",
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
            <p className="heading-text">Top Rated Movie: Fast X</p>
          </div>
        </div>

        <div className='movie-description'>
          {/*<Link to="/" className='return-button'>Return to Homepage</Link>*/}
        
          <img src= {SWmovieposter} alt="Movie Poster" className='sw-movie-poster-left'/>
          {/*<img src= {starwar} alt="Movie Poster" className='poster-image'/>*/}

          <div className="movie-text-content">
            <h2 className='movie-title'>Fast X</h2>
            <div className = 'movie-details'>
            <p>Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.</p>

            <table className="movie-info-table">
              <tr className="pad-top">
                <th>Show Date</th>
                <td>May 18, 2023</td>
              </tr>

              <tr>
                <th>Genre</th>
                <td>Action | Adventure | Crime</td>
              </tr>

              <tr>
                <th>Director</th>
                <td>Louis Leterrier</td>
              </tr>

              <tr>
                <th>Starring</th>
                <td>Vin Diesel, Michelle Rodriguez, Jason Momoa</td>
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

export default ffx;
