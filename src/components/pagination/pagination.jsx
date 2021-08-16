import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {usePagination, DOTS} from '../../usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(`pagination`, {[className]: className})}
    >
      <li
        className={classnames(`pagination__item`, {
          disabled: currentPage === 1
        })}
      >
        <button className="pagination__btn pagination__btn-previous" onClick={onPrevious}>Назад</button>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination__item pagination__item--dots">&#8230;</li>;
        }

        return (
          <li
            key={`pagination-${pageNumber}`}
            className={classnames(`pagination__item`, {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(`pagination__item`, {
          disabled: currentPage === lastPage
        })}
      >
        <button className="pagination__btn pagination__btn-next" onClick={onNext}>Далее</button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Pagination;
