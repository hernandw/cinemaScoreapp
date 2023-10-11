import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";
import PropTypes from "prop-types";

const CardMovies = ({ poster_path, title, overview, vote_average }) => {
    const { imageBase } = useContext(ContextMovie);
    const getColor = (color)=> {
      if(color >= 8){
        return "success";
      }else if(color >= 5){
        return "warning";
      }else{
        return "danger";
      }
    }
  return (
    <div className="cardmovie">
      <img src={imageBase + poster_path} className="card-img-top" alt={title} />
      <div className="card-body p-4 d-flex justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p
          className={`text-${getColor(vote_average)} fw-bold bg-color average`}
        >
          {(vote_average).toFixed(1)}
        </p>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

CardMovies.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
}

export default CardMovies;
