import React from 'react'
import Sidebar from "../Components/Sidebar";

const TicketPage = () => {
  const handleReturn = () => {
    // Handle return button functionality
    console.log('Return button clicked!');
  };

  return (
    <div>
      <h1>Upcoming Booking</h1>
      <div className="ticketing-form">
        <div className="form-row">
          <label htmlFor="movie">Movie:</label>
          <select id="movie">
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" />
        </div>
        <div className="form-row">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" />
        </div>
        <div className="form-row">
          <label htmlFor="cinema">Cinema:</label>
          <input type="text" id="cinema" />
        </div>
        <div className="form-row">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" />
        </div>
        <div className="form-row">
          <label htmlFor="ticket">Ticket:</label>
          <select id="ticket">
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <button onClick={handleReturn}>Previous Page</button>
      </div>
    </div>
  );
};

export default TicketPage;
