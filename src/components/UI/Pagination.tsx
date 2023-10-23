import ReactPaginate from "react-paginate";

function PaginatedItems(props: any) {
  return (
    <>
      <ReactPaginate
        {...props}
        nextLabel={">"}
        previousLabel={"<"}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        nextLinkClassName="history-pagination__btn"
        pageLinkClassName="history-pagination__page"
        previousLinkClassName="history-pagination__btn"
        activeLinkClassName="history-pagination__active"
        containerClassName="history-pagination__container"
      />
    </>
  );
}

export default PaginatedItems;
