import React from "react";
import "./Card.css";

const Cards = ({item, handleClick}) => {
    const{id, name,description ,price} = item;
    return(
        <div className="formInput">
            <h2>{name}</h2>
            <h4>{description}</h4>
            <h4>{price}</h4>
            <div>
                <button onClick={() => {handleClick(item)}}>Add</button>
            </div>
        </div>
    )
}

export default Cards;