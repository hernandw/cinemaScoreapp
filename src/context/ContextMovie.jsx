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
  const [language, setLanguage] = useState("en-US");
  const [genreSelected, setGenreSelected] = useState('')
  const [genres, setGenres] = useState([])
  const API_KEY = apiKey;
  const baseUrl = "https://api.themoviedb.org/3/";
  const searchUrl = `${baseUrl}search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;

  const urlGenres = baseUrl + "genre/movie/list?api_key=" + API_KEY + "&language=" + language;
  
   const API_URL = baseUrl +
    "/discover/movie?api_key=" +
    API_KEY + "&language=" + language + "&page=" + page + "&sort_by=popularity.desc&include_adult=false&include_video=false";

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const getGenres = ()=>{
    fetch(urlGenres)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
  }

  useEffect(() => {
    if (!search) {
      getMovies(API_URL);
    } else {
      getMovies(searchUrl);
    }
  }, [search, page, language]);

  useEffect(()=>{
    getGenres();
  }, [])

  return (
    <ContextMovie.Provider value={{ movies, imageBase, setSearch, search, API_KEY, page, setPage, productPerPage, setProductPerPage, language, setLanguage, genreSelected, setGenreSelected, genres }}>
      {children}
    </ContextMovie.Provider>
  );
};

ContextMovieProvider.propTypes = {
  children: PropTypes.node,
};
