import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as BtPagination } from 'react-bootstrap';

function Pagination({ pagesCount, selectedPage = 1 }) {
  function generatePaginationPages() {
    const paginationElements = [
      <BtPagination.First
        disabled={selectedPage === 1}
        key={0}
        href={`?page=${1}`}
      />,
      <BtPagination.Prev
        key={1}
        disabled={selectedPage === 1}
        href={`?page=${selectedPage - 1}`}
      />,
    ];

    if (pagesCount <= 9) {
      for (let i = 1; i <= pagesCount; i++) {
        paginationElements.push(
          <BtPagination.Item
            key={i + 1}
            active={i === selectedPage}
            href={`?page=${i}`}
          >
            {i}
          </BtPagination.Item>
        );
      }
    } else {
      let fromPaginationNumber = 1;
      let toPaginationNumber = 9;

      if (selectedPage - 5 > 0 && selectedPage + 5 < pagesCount) {
        fromPaginationNumber = selectedPage - 4;
        toPaginationNumber = selectedPage + 4;
      } else if (selectedPage + 5 >= pagesCount) {
        toPaginationNumber = pagesCount;
        fromPaginationNumber = pagesCount - 9;
      }

      for (let i = fromPaginationNumber; i <= toPaginationNumber; i++) {
        paginationElements.push(
          <BtPagination.Item
            key={i + 1}
            active={i === selectedPage}
            href={`?page=${i}`}
          >
            {i}
          </BtPagination.Item>
        );
      }
    }

    paginationElements.push(
      <BtPagination.Next
        key={pagesCount + 2}
        disabled={selectedPage === pagesCount}
        href={`?page=${
          selectedPage < pagesCount ? selectedPage + 1 : selectedPage
        }`}
      />,
      <BtPagination.Last
        key={pagesCount + 3}
        disabled={selectedPage === pagesCount}
        href={`?page=${pagesCount}`}
      />
    );

    return paginationElements;
  }

  return <BtPagination>{generatePaginationPages()}</BtPagination>;
}

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  selectedPage: PropTypes.number,
};
export default Pagination;