import { useContext } from "react";
import { ContextMovie } from "./context/ContextMovie";
import CardMovies from "./components/CardMovies";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
    <div>
      <NavBar />
      <>
        <div className="card_container">
          {resultados && resultados.length > 0 ? (
            resultados?.map((movie) => <CardMovies key={movie.id} {...movie} />)
          ) : (
            <h3>
              No hay películas asociadas a tu búsqueda. Intenta con otro título
            </h3>
          )}
        </div>
      </>
      <Footer />
    </div>
  );
};

export default App;
