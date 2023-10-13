import PropTypes from "prop-types";

const Pagination = ({ productPerPage, totalProducts, setPage, page }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const onPreviusPage = () => {
    setPage(page - 1);
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  const onSpecifPage = (number) => {
    setPage(number);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={`page-link ${page <= 1 && "disabled"}`}
            href="#"
            onClick={onPreviusPage}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              className={`page-link ${page === number && "active"}`}
              href="#"
              onClick={() => onSpecifPage(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={`page-link ${page >= pageNumbers.length && "disabled"}`}
            href="#"
            onClick={onNextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  productPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

export default Pagination;
