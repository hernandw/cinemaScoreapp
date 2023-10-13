import { useContext, useEffect, useState } from "react";

import { ContextMovie } from "../context/ContextMovie";
import CardMovies from "../components/CardMovies";
import Pagination from "../components/Pagination";

const Trend = () => {
  const [dataTrending, setDataTrending] = useState();
  const [page, setPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);
  const { API_KEY } = useContext(ContextMovie);
  const trend = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`;

  
  const getTrending = (trend) => {
    fetch(trend)
      .then((res) => res.json())
      .then((data) => setDataTrending(data.results));
  };

  useEffect(() => {
    getTrending(trend);
  }, [trend]);

  return (
    <div>
      <h1 className="text-center pt-4">Trending Today</h1>
      <div className="card_container">
        {dataTrending?.map((item) => (
          <CardMovies key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        productPerPage={productPerPage}
        totalProducts={100}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};

export default Trend;
