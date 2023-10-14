import { createContext, useEffect, useState } from "react";
import { imageBase } from "../utils/data";
import PropTypes from "prop-types";
import { apiKey } from "../utils/data";

export const ContextMovie = createContext();

export const ContextMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(10);
  const API_KEY = apiKey;
  const baseUrl = "https://api.themoviedb.org/3/";
  const searchUrl = `${baseUrl}search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
  
   const API_URL = baseUrl +
    "/discover/movie?api_key=" +
    API_KEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page;

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    if (!search) {
      getMovies(API_URL);
    } else {
      getMovies(searchUrl);
    }
  }, [search, page]);

  return (
    <ContextMovie.Provider value={{ movies, imageBase, setSearch, search, API_KEY, page, setPage, productPerPage }}>
      {children}
    </ContextMovie.Provider>
  );
};

ContextMovieProvider.propTypes = {
  children: PropTypes.node,
};
