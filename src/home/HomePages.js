import { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/Upcomming/Upcomming";
import Trending from "../components/trending/Trending";
import Footer from "../components/footer/Footer";

import { useEffect } from "react";
function HomePages() {
  const API_TOPRATED =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=a57e7f34ba1770d3a0232a13a91d83f5";

  const [abc, setAbc] = useState([]);
  useEffect(() => {
    fetch(API_TOPRATED)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setAbc(data.results);
      });
  }, []);

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
  }, []);

  const [api, setAPI] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a57e7f34ba1770d3a0232a13a91d83f5";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setAPI(data.results);
      });
  }, []);

  return (
    <>
      <Homes />

      <Upcomming items={items} recentMovie="Up-Trending" />

      <Upcomming items={api} recentMovie="Popular" />

      <Trending />

      <Footer />
    </>
  );
}

export default HomePages;
