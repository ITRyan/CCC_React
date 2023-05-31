import React from "react";
import { Link } from "react-router-dom";
import starwar from "../img/StarWar.jpeg";
import "../App.css";
import Sidebar from "../Components/Sidebar";

const sw = () => {
  const handleBookNow = () => {
    // Handle book now functionality
    console.log("Book now clicked!");
  };

  const handleIMDb = () => {
    // Redirect to IMDb link
    window.open(
      "https://www.imdb.com/title/tt2488496/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_star%2520wars%2520awaken",
      "_blank"
    );
  };

  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="movie-description ">
        <Link to="/" className="return-button">
          Return to Homepage
        </Link>
        <div>
          <img src={starwar} alt="Movie Poster" className="poster-image" />
          <h2 className="movie-title">
            Star Wars: Episode VII - The Force Awakens
          </h2>
          <div className="movie-details">
            <p>
              As a new threat to the galaxy rises, Rey, a desert scavenger, and
              Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to
              search for the one hope of restoring peace.
            </p>
            <p>Show Date: May 31, 2023</p>
            <p>Genre: Action, Adventure, Sci-Fi</p>
            <p>Director: JJ Abrams</p>
            <p>
              Starring: Daisy Ridley, Oscar Issac, Harrison Ford, Carrie Fisher
            </p>
          </div>
          <select className="veune-dropdown">
            <option value="venue1">IFC Cinema</option>
            <option value="venue2">K11 Musea Cinema</option>
            <option value="venue3">Times Square Cinema</option>
          </select>
          <div className="button-container">
            <button onClick={handleBookNow} className="book-now-button">
              Book Now
            </button>
            <button onClick={handleIMDb} className="imdb-button">
              IMDb
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default sw;
