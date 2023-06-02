import { Link } from "react-router-dom";
import React from 'react'


const TicketForm =()=>{
    return(
        <div className="ticketing-form">
                <div className="form-row">
                <label htmlFor="movie">Movie:</label>
                <select id="movie">
                    <option value="starwars">Star Wars : The Force Awakens</option>
                    <option value="johnwick">John Wick : Chapter 4</option>
                    <option value="fastx">Fast X</option>
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
                  <label htmlFor="veune">Cinema:</label>
                    <select className='veune-dropdown'>
                      <option value="venue1">IFC Cinema</option>
                      <option value="venue2">K11 Musea Cinema</option>
                      <option value="venue3">Times Square Cinema</option>
                    </select>
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

                <div className="form-row">
                  <label htmlFor="ticket">Seat:</label>
                  <select id="ticket">
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                    <option value="B4">B4</option>
                    <option value="B5">B5</option>
                    <option value="B6">B6</option>
                    <option value="B7">B7</option>
                    <option value="C4">C4</option>
                    <option value="C5">C5</option>
                    <option value="D3">D3</option>
                    <option value="D4">D4</option>
                  </select>
                </div>
              </div>
    );
}

export default TicketForm;