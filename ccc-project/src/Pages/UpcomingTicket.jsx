import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import SWmovieposter from "../img/productpage_starwar.png";
import returnbtn from "../icn/icn_return.svg";
import shortbanner from "../img/AvengersBanner_short.png";
import TicketPage from "../Pages/TicketPage";

const UpcomingTicket = () => {


  return (
    <div className="upcomingticket-container">
      <Sidebar/>
      <img src= {shortbanner} alt="Movie Poster" className='short-banner'/>

        <div className="movie-heading-div">
          <div className="heading-container">
           <Link to="/" className='return-button'><img src={returnbtn} alt="btn"/></Link>
            <p className="heading-text">Ticket</p>
          </div>
        </div>

        <hr className="separator"/>

        <table className="ticket-table">
              <tr className="pad-top pad-bot">
                <th>Movie</th>
                <td>Star Wars : The Force Awakens</td>
              </tr>

              <tr className="pad-top pad-bot">
                <th>Show Date</th>
                <td>May 31, 2023</td>
              </tr>

              <tr className="pad-top pad-bot">
                <th>Time</th>
                <td>19:30</td>
              </tr>

              <tr className="pad-top pad-bot">
                <th>Venue</th>
                <td>Cinema</td>
              </tr>

              <tr className="pad-top pad-bot">
                <th>Quantity</th>
                <td>2</td>
              </tr>

              <tr className="pad-top pad-bot">
                <th>Ticket</th>
                <td>Standard</td>
              </tr>


        </table>

            

           
    </div>
  );
};

export default UpcomingTicket;