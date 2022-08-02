import { Link } from "react-router-dom";
function Ucard({ id, title, poster_path, vote_count, backdrop_path }) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <Link to={`/singlepage/${id}`}>
      <>
        <div className="MovieBox">
          <div className="img">
            <img src={API_IMG + poster_path} alt="" />
            <h3>{title}</h3>
          </div>
        </div>
      </>
    </Link>
  );
}

export default Ucard;
