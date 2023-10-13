import { useState } from "react";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }: any) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
    console.log(currentItems);
  };

  return (
    <>
      <ReactPaginate
        nextLabel={">"}
        previousLabel={"<"}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
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
