import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Index";
import Trend from "../pages/Trend";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trending" element={<Trend />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRouter;
