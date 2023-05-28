import React from 'react';
import MoviePage from './Pages/MoviePage';

const App = () => {
  return (
    <div>
      <MoviePage
        title="Star Wars: Episode VII - The Force Awakens"
        description="As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace."
        genre="Action, Adventure, Sci-Fi"
        director="JJ Abrams"
        starring="Daisy Ridley, Oscar Issac, Harrison Ford, Carrie Fisher"
        releaseDate="December 17, 2015"
        venue
        imdbLink="https://www.imdb.com/title/tt2488496/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_star%2520wars%2520awaken"
        img={"./images/sw.png"}
      />

      <MoviePage
        title="John Wick: Chapter 4"
        description="John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
        genre="Action, Crime, Thriller"
        director="Chad Stahelski"
        starring="Keanu Reeves, Laurence Fishburne, George Georgiou"
        releaseDate="March 24, 2023"
        venue
        imdbLink="https://www.imdb.com/title/tt10366206/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_john%2520wick"
        img={"src/images/jw4.jpeg"}
      />

      <MoviePage
        title="Fast X"
        description="Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes."
        genre="Action, Adventure, Crime"
        director="Louis Leterrier"
        starring="Vin Diesel, Michelle Rodriguez, Jason Momoa"
        releaseDate="May 18, 2023"
        venue
        imdbLink="https://www.imdb.com/title/tt5433140/?ref_=nv_sr_srsg_1_tt_6_nm_1_q_fast%2520"
        img="src/images/fastx.jpeg"
      />
    </div>
  );
};

export default App;