import React, { useState } from 'react';
import "../App.css";

const initialSeats = [
  { id: 1, occupied: false },
  // ... add rest of the seats here following the format
];

const initialRows = Array(6).fill(initialSeats);

const MovieSeatBooking = () => {
  const [movie, setMovie] = useState('10');
  const [rows, setRows] = useState(initialRows);
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const selectSeat = (rowIndex, seatIndex) => {
    const newRows = [...rows];
    newRows[rowIndex][seatIndex].occupied = !newRows[rowIndex][seatIndex].occupied;
    setRows(newRows);

    // Update count and total
    const newCount = selectedSeatsCount + (newRows[rowIndex][seatIndex].occupied ? 1 : -1);
    setSelectedSeatsCount(newCount);
    setTotal(newCount * movie);
  };

  const selectMovie = (event) => {
    setMovie(event.target.value);
  };

  return (
  <div className='setbody'>
    <div className='seatmain'>
      <div className="movie-container">
        <label>Pick a movie:</label>
        <select id="movie" value={movie} onChange={selectMovie}>
          <option value="10">Star Wars: The Force Awakens ($10)</option>
          <option value="12">John Wick ($12)</option>
          <option value="8">John Wick ($8)</option>
        </select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>

        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>

        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen"></div>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <div 
                className={`seat ${seat.occupied ? 'occupied' : ''}`} 
                key={seatIndex}
                onClick={() => selectSeat(rowIndex, seatIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      <p className="text">
        You have selected <span id="count">{selectedSeatsCount}</span> seats for a price of $<span id="total">{total}</span>
      </p>
    </div>
    </div>
  );
};

export default MovieSeatBooking;
