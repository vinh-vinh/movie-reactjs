import React from "react";
import HomeCard from "./HomeCard";
import "./home.css";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

const SmaplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};
const API_URL =
  "  https://api.themoviedb.org/3/movie/popular?api_key=a57e7f34ba1770d3a0232a13a91d83f5  ";
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  };
  const [layitems, setLayItem] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setLayItem(data.results);
      });
  }, []);

  return (
    <>
      <div className="homeContainer">
        <Slider {...settings}>
          {layitems.map((item) => (
            <HomeCard key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Home;
