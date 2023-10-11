import {
  FaFire,
  FaHeart,
  FaClapperboard,
  FaDesktop
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column align-items-center">
        <FaFire />
        <p>Trending</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <FaHeart />
        <p>Favourites</p>
      </div>
      
      <div className="d-flex flex-column align-items-center">
        <FaDesktop />
        <p>TV Series</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaClapperboard />
        <p>Movies</p>
      </div>
    </div>
  );
};

export default Footer;
