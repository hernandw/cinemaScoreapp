import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";

const Search = () => {
  const { search, setSearch } = useContext(ContextMovie);
  return (
    <div className="search">
      <input className="form-control mt-5 mb-5"
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
