import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";

const CardMovies = ({ backdrop_path, title, overview }) => {
  const { imageBase } = useContext(ContextMovie);
  return (
    
      <div className="w-25 cardmovie">
        <img
          src={imageBase + backdrop_path}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body p-2">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    
  );
};

export default CardMovies;
