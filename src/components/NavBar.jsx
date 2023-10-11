import Search from "./Search";


const NavBar = () => {
  return (
    <div className="d-flex align-items-center navbar">
      <h1 className="text-center"> CinemaScore App </h1>
      <Search />
    </div>
  );
};

export default NavBar;
