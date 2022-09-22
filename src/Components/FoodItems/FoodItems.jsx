import React, { useEffect, useState } from "react";
import "./FoodItems.css";
// import burger from "../../assets/burger.jpeg"

const FoodItems = () => {
  const [feedsData, setFeedsData] = useState([]);
  const [data, setData] = useState([]);
  const getData = () =>{
    fetch("data/feeds.json", {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      }).then((res) => res.json()).then((response) => setData(response)
      
      )
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-card-container">
      {
        data &&
        data.map(({name,price,image}) => {
        return (
          <div>
            <Cards name={name} price={price} image={image}/>
          </div>
        );
      })}
    </div>
  );
};

export default FoodItems;

//card component
const Cards = ({ name, price, image }) => {
  return (
    <div>
      <div className="card-container">
        <img src={image} alt="" />
        <div className="texts">
          <span>{name}</span>
          <span>Price: {price} </span>
        </div>
        <div className="btn-con">
          <button className="btn plus">+</button>
          <button className="btn">-</button>
        </div>
      </div>
    </div>
  );
};
