// Cinema.js
import React from 'react';
import Seat from '/Seat';

function Cinema({ rows, columns }) {
    let seats = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(<Seat seatNumber={`${i + 1}-${j + 1}`} key={`${i + 1}-${j + 1}`} />);
        }
        seats.push(<div key={i}>{row}</div>);
    }

    return <div>{seats}</div>;
}

export default Cinema;
