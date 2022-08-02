import "./trending.css";
import Home from "../homes/Home";
import { trending } from "../../dummyData";
import { useState, useEffect } from "react";

function Trending() {
  const API_TREND =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a57e7f34ba1770d3a0232a13a91d83f5";

  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(API_TREND)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setTrending(data.results);
      });
  }, []);

  return (
    <>
      <section className="trending">
        <Home items={trending} />
      </section>
    </>
  );
}

export default Trending;
