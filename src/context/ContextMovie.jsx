import { createContext, useEffect, useState } from "react";
import { urlBase, options, imageBase } from "../utils/data";
import PropTypes from "prop-types";

export const ContextMovie = createContext();

export const ContextMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState()

  useEffect(() => {
    fetch(urlBase, options)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <ContextMovie.Provider value={{ movies, imageBase, setSearch, search }}>
      {children}
    </ContextMovie.Provider>
  );
};

ContextMovieProvider.propTypes = {
  children: PropTypes.node,
}
