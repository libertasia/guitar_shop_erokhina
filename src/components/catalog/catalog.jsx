import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';
import CatalogItem from '../catalog-item/catalog-item';
import Pagination from '../pagination/pagination';
import {getAllGuitars} from '../../store/selectors';

const MAX_ITEMS_COUNT_PER_PAGE = 9;

const Catalog = (props) => {
  const {guitars} = props;

  const [currentPage, setCurrentPage] = useState(1);

  const currentGuitarData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * MAX_ITEMS_COUNT_PER_PAGE;
    const lastPageIndex = firstPageIndex + MAX_ITEMS_COUNT_PER_PAGE;
    return guitars.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="main__catalog catalog">
      <div className="catalog__sorting-wrapper">
        <div className="catalog__sorting-text">
          <p>Сортировать:</p>
          <span><a className="catalog__sorting-link catalog__sorting-link--active" href="#">по цене</a></span>
          <span><a className="catalog__sorting-link" href="#">по популярности</a></span>
        </div>

        <div className="catalog__sorting-arrows">
          <button className="catalog__sorting-arrow-btn catalog__sorting-arrow-btn--active" type="button">
            <span className="visually-hidden">Сортировать по возрастанию</span>
            <svg className="catalog__arrow-icon" width={14} height={11}>
              <use href={sprite + `#arrow-up`} />
            </svg>
          </button>
          <button className="catalog__sorting-arrow-btn" type="button">
            <span className="visually-hidden">Сортировать по убыванию</span>
            <svg className="catalog__arrow-icon" width={14} height={11}>
              <use href={sprite + `#arrow-down`} />
            </svg>
          </button>
        </div>
      </div>

      <ul className="catalog__goods-list">
        {currentGuitarData.map((guitar) =>
          <CatalogItem
            key={guitar.article}
            guitar={guitar}
          />)}
      </ul>

      <Pagination
        className="catalog__pagination-list"
        currentPage={currentPage}
        totalCount={guitars.length}
        pageSize={MAX_ITEMS_COUNT_PER_PAGE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

Catalog.propTypes = {
  guitars: PropTypes.arrayOf(
      PropTypes.shape({
        article: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        reviews: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        imageName: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isInCart: PropTypes.bool.isRequired,
      }).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getAllGuitars(state),
});

export {Catalog};
export default connect(mapStateToProps, null)(Catalog);
