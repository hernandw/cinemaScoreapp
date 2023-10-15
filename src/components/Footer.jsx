import {
  FaFire,
  FaClapperboard
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link className="d-flex flex-column align-items-center" to="/trending">
          <FaFire />
          <p>Trending</p>
        </Link>
      </div>
      {/* <div>
        <Link
          className="d-flex flex-column align-items-center"
          to="/favourites"
        >
          <FaHeart />
          <p>Favorites</p>
        </Link>
      </div> */}

     {/*  <div className="d-flex flex-column align-items-center">
        <FaDesktop />
        <p>TV Series</p>
      </div> */}
      <div>
        <Link
          className="d-flex flex-column align-items-center justify-content-center"
          to="/"
        >
          <FaClapperboard />
          <p>Movies</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
