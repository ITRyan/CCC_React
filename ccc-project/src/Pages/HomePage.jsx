import React, { useState } from "react";
import "../App.css";
import ProductCard from "../Components/ProductCardComponent.jsx";
//import "bulma/css/bulma.min.css";
import num1 from "../img/1.png";
import num2 from "../img/2.png";
import num3 from "../img/3.png";
import starwar from "../img/StarWar.jpeg";
import johnwick from "../img/JohnWick.jpg";
import fastx from "../img/FastX.jpg";
import crown from "../icn/icn_crown.svg";
import CarouselBanner from "../Components/SlidingBanner.jsx";
import Sidebar from "../Components/Sidebar";


const HomePage = () => {
  const [count, setCount] = useState([0, 0, 0]); //default click = 0
  const handleClick = (index) => {
    //use index to seperate different click rate
    const newCount = [...count];
    newCount[index] += 1;
    setCount(newCount);
  };

  //movie sequen [id = index] array

  return (
    <>
      <Sidebar/>
      <div className="home-body">
        <CarouselBanner />
      
        <div className="heading-div">
          <div className="heading-container">
            <img src={crown} />
            <p className="heading-text">Top Rated Movie</p>
          </div>
        </div>

        <div className="product-container">
          {/* <section className="section"> */}
            <div className="columns">
              <div className="column" onClick={() => handleClick(0)}>
                <img className="back-img" src={num1} />
                <ProductCard
                  title="Star Wars: The Force Awakens"
                  img={starwar}
                  hitrate={"Hit Rate: " + count[0]}
                />
              </div>

              <div className="column" onClick={() => handleClick(1)}>
                <img className="back-img" src={num2} />
                <ProductCard
                  title="John Wick"
                  img={johnwick}
                  hitrate={"Hit Rate: " + count[1]}
                />
              </div>

              <div className="column" onClick={() => handleClick(2)}>
                <img className="back-img" src={num3} />
                <ProductCard
                  title="Fast X"
                  img={fastx}
                  hitrate={"Hit Rate: " + count[2]}
                />
              </div>
            </div>
          {/* </section> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
