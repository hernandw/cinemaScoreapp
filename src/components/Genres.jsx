import PropTypes from "prop-types";

const Genres = ({ name }) => {
  return (
    <div>
      <button className="btn btnColor">{name}</button>
    </div>
  );
};


Genres.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Genres;
