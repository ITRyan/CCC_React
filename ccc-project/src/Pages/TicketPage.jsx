import React from 'react'
import Sidebar from "../Components/Sidebar";
import returnbtn from "../icn/icn_return.svg";
import shortbanner from "../img/AvengersBanner_short.png";
import { Link } from "react-router-dom";
import Seatplan from "../img/seatplan.png";
import TicketForm from './TicketForm';

const TicketPage = () => {
  const handleReturn = () => {
    // Handle return button functionality
    console.log('Return button clicked!');
  };

  return (
    <div>
      <Sidebar/>
      <img src= {shortbanner} alt="Movie Poster" className='short-banner'/>

        <div className="movie-heading-div">
          <div className="heading-container">
           <Link to="/" className='return-button'><img src={returnbtn} alt="btn"/></Link>
            <p className="heading-text">Ticket Booking</p>
          </div>
        </div>

        <div className="seatplan">
          <img src={Seatplan} alt="seatplan"/>
        </div>

        <TicketForm />



           <Link to="/upcomingticket">
              <button className="submit-booking-btn" onClick={handleReturn}>Confirm Booking</button>
          </Link>
            
      
    </div>
  );
};

export default TicketPage;
