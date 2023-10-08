import { useContext } from "react";
import { ContextMovie } from "./context/ContextMovie";
import CardMovies from "./components/CardMovies";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const { movies, search } = useContext(ContextMovie);
  let resultados = "";

  if (!search) {
    resultados = movies;
  } else {
    resultados = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="w-50"> Movies Trailer App </h1>
        <Search />
      </div>
      <div>
        <div className="card_container">
          {resultados && resultados.length > 0 ? (
            resultados?.map((movie) => <CardMovies key={movie.id} {...movie} />)
          ) : (
            <h3>
              No hay películas asociadas a tu búsqueda. Intenta con otro título
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
