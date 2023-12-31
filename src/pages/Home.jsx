import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";
import CardMovies from "../components/CardMovies";
import Pagination from "../components/Pagination";
/* import Genres from "../components/Genres"; */



const Home = () => {
  const { movies, search, productPerPage, page, setPage } = useContext(ContextMovie);
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
      <h1 className="text-center pt-5">Movies</h1>
      {/* <div className="genres">
        { genres && genres.map((genre) => (
          <Genres key={genre.id} {...genre} />
        ))}
      </div> */}
      <div className="card_container">
        {resultados && resultados.length > 0 ? (
          resultados?.map((movie) => <CardMovies key={movie.id} {...movie} />)
        ) : (
          <h3>
            No hay películas asociadas a tu búsqueda. Intenta con otro título
          </h3>
        )}
      </div>
      <div className="pagination">
        <Pagination
          productPerPage={productPerPage}
          totalProducts={100}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
};

export default Home;
