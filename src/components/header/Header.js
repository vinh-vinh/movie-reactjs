import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [mobile, setMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header>
      <div
        className={
          isScrolled ? "headerscrolled navbar scrolled" : "container flexSB"
        }
      >
        <nav className="flexSB">
          <div className="logo">
            <Link to="/movie-reactjs">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt=""
              />
            </Link>
          </div>

          <ul
            className={mobile ? "navMenu-list" : "flexSB navhover"}
            onClick={() => setMobile(false)}
          >
            <li>
              <Link to="/movie-reactjs">Home</Link>
            </li>
            <li>
              <Link to="/movie-reactjs">Up-Trending</Link>
            </li>
            <li>
              <Link to="/movie-reactjs">Popular</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"> </i>
            )}
          </button>
        </nav>

        <div className="account flexSB">
          <i className="fa fa-search"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
