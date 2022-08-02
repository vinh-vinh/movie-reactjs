import React from "react";

import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_IMG_ORI = " https://image.tmdb.org/t/p/original/";

function HomeCard({
  id,
  title,
  poster_path,
  vote_count,
  backdrop_path,
  vote_average,
  overview,
}) {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={API_IMG_ORI + backdrop_path} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <div className="titlename">
              <h1>{title}</h1>
            </div>
            <div className="rating flex">
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>{vote_count}(Imdb)</label>
              <span>GP</span>
              <label>{title}</label>
            </div>
            <p>{overview}</p>
            <div className="cast">
              <h4>
                <span>Starring </span>
                {vote_average}
              </h4>
              <h4>
                <span>Genres </span>
                {vote_average}
              </h4>
            </div>

            <div className="palyButton row">
              <Link to={`/singlepage/${id}`}>
                <button className="play-btn">WATCH TRAILER</button>
              </Link>
            </div>
          </div>
          <div className="khunghinhtrai">
            <img src={API_IMG + poster_path} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
