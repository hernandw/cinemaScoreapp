import { useContext } from "react";
import { ContextMovie } from "../context/ContextMovie";

const Search = () => {
  const { search, setSearch } = useContext(ContextMovie);
  return (
    <div>
      <input className="form-control w-full mx-auto mt-5 mb-5"
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
