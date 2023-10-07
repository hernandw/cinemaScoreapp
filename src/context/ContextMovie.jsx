import { createContext, useEffect, useState } from "react";
import { imageBase } from "../utils/data";
import PropTypes from "prop-types";
import { apiKey } from "../utils/data";

export const ContextMovie = createContext();

export const ContextMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const API_KEY = apiKey;
  const baseUrl = "https://api.themoviedb.org/3/";
  const API_URL =
    baseUrl +
    "/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&api_key=" +
    API_KEY;

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies(API_URL);
  }, [API_URL]);

  return (
    <ContextMovie.Provider value={{ movies, imageBase, setSearch, search }}>
      {children}
    </ContextMovie.Provider>
  );
};

ContextMovieProvider.propTypes = {
  children: PropTypes.node,
};
