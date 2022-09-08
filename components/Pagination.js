import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="w-30 h-30 grid place-items-center border-2 border-darkgray px-8 rounded-full">
            <i className="fa-solid fa-angle-right text-darkergray" />
          </div>
        }
        pageRangeDisplayed={4}
        pageCount={pageNumbers.length}
        previousLabel={
          <div className="w-30 h-30 grid place-items-center border-2 border-darkgray px-8 rounded-full">
            <i className="fa-solid fa-angle-left text-darkergray" />
          </div>
        }
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        activeClassName="bg-themeBlue text-white w-30 h-30 rounded-full grid place-items-center"
        onPageChange={(data) => paginate(data.selected + 1)}
        containerClassName="flex"
        pageClassName="text-18 w-30 h-30 mx-3 grid place-items-center font-sans"
        disabledClassName="hidden"
      />
    </>
  );
};

export default Pagination;
