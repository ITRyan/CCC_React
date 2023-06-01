import React from 'react';
import "../App.css";

const ProductCard = (props) => {
    return(
        <div className = "product-card">
            <div className = "card-image">
                <figure className="image is-2">
                    <img src ={props.img} alt="img"/>
                </figure>         
            </div>
            <div className="card-content" >
                <div className="media-content">
                <hr className="separator"/>
                <p className="title is-4">{props.title}</p>
                <p className="hit-rate">{props.hitrate}</p>
                </div>    
            </div>
        </div>
    );
};

export default ProductCard;