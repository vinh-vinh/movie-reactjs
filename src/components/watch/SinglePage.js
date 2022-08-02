import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Upcomming from "../Upcomming/Upcomming";
import { Link } from "react-router-dom";

import Footer from "../footer/Footer";
import "./style.css";

function SinglePage() {
  const { id } = useParams();
  const [api, setAPI] = useState([]);

  const API_UPCOMING =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a57e7f34ba1770d3a0232a13a91d83f5";

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(API_UPCOMING)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setItems(data.results);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?api_key=a57e7f34ba1770d3a0232a13a91d83f5&append_to_response=videos"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setAPI(data.results);
      });
  }, [id]);

  const aaa = api.map((item, index) => item.key);

  return (
    <>
      <section className="SinglePage">
        {/* <div className="singleHeading">
              <h1>{test.original_title}</h1>
              <span> | {test.original_title} | </span> <span>HD</span>
            </div> */}
        <div className="container">
          <iframe
            key={id}
            src={`https://www.youtube.com/embed/${aaa[0]}`}
            width="100%"
            height="800"
            title="video"
          />
          <div className="para">
            {/* <h3>Date:{test.original_title}</h3>
                <p>{test.original_title}</p>
                <p>{test.overview}</p> */}
          </div>

          <div className="social">
            <h3>Share:</h3>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
              alt=""
            />
          </div>
        </div>

        <Upcomming items={items} recentMovie="Popular" />

        <Footer />
      </section>
    </>
  );
}

export default SinglePage;
