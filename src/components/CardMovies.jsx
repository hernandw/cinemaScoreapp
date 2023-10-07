import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";

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
    
      <div className="w-25 cardmovie">
        <img
          src={imageBase + poster_path}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body p-4 d-flex justify-content-between">
              <h5 className="card-title">{title}</h5>
              <p className={`text-${getColor(vote_average)} fw-bold bg-color average`}>{vote_average}</p>
          {/* <p className="card-text">{overview}</p> */}
        </div>
      </div>
    
  );
};

export default CardMovies;
