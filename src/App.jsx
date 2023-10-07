import { useContext } from "react"
import { ContextMovie } from "./context/ContextMovie"
import CardMovies from "./components/CardMovies"
import './App.css'
import Search from "./components/Search"






const App = () => {
const { movies} = useContext(ContextMovie)
  
  return (
    <div>
      <h1 className="text-center mb-5 mt-5">Movies</h1>
<Search/>
      <div>
        <div className="card_container">
          {movies?.map((movie) => (
            <CardMovies key={movie.id} {...movie} />
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default App

