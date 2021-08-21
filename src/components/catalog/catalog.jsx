import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';
import CatalogItem from '../catalog-item/catalog-item';
import Pagination from '../pagination/pagination';
import {getSortedGuitars} from '../../store/selectors';
import {GuitarShape} from '../../utils';
import {SortingOrder, SortingType, MAX_ITEMS_COUNT_PER_PAGE} from '../../const';
import {ActionCreator} from '../../store/action';

const Catalog = (props) => {
  const {guitars, onSortTypeChangeClick, onSortOrderChangeClick} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [isSortByPriceLinkActive, setIsSortByPriceLinkActive] = useState(false);
  const [isSortByReviewsLinkActive, setIsSortByReviewsLinkActive] = useState(false);
  const [isAscendingBtnActive, setIsAscendingBtnActive] = useState(false);
  const [isDescendingBtnActive, setIsDescendingBtnActive] = useState(false);

  const currentGuitarData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * MAX_ITEMS_COUNT_PER_PAGE;
    const lastPageIndex = firstPageIndex + MAX_ITEMS_COUNT_PER_PAGE;
    return guitars.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, guitars]);

  const handleSortByPriceClick = () => {
    onSortTypeChangeClick(SortingType.PRICE);
    setIsSortByPriceLinkActive(true);
    setIsSortByReviewsLinkActive(false);
  };

  const handleSortByReviewsClick = () => {
    onSortTypeChangeClick(SortingType.REVIEWS);
    setIsSortByReviewsLinkActive(true);
    setIsSortByPriceLinkActive(false);
  };

  const handleSortAscClick = () => {
    onSortOrderChangeClick(SortingOrder.ASCENDING);
    setIsAscendingBtnActive(true);
    setIsDescendingBtnActive(false);

  };

  const handleSortDescClick = () => {
    onSortOrderChangeClick(SortingOrder.DESCENDING);
    setIsDescendingBtnActive(true);
    setIsAscendingBtnActive(false);
  };

  return (
    <div className="main__catalog catalog">
      <div className="catalog__sorting-wrapper">
        <div className="catalog__sorting-text">
          <p>Сортировать:</p>
          <span><a className={`catalog__sorting-link ${isSortByPriceLinkActive ? `catalog__sorting-link--active` : ``}`} href="#" onClick={handleSortByPriceClick}>по цене</a></span>
          <span><a className={`catalog__sorting-link ${isSortByReviewsLinkActive ? `catalog__sorting-link--active` : ``}`} href="#" onClick={handleSortByReviewsClick}>по популярности</a></span>
        </div>

        <div className="catalog__sorting-arrows">
          <button className={`catalog__sorting-arrow-btn ${isAscendingBtnActive ? `catalog__sorting-arrow-btn--active` : ``}`} type="button" onClick={handleSortAscClick}>
            <span className="visually-hidden">Сортировать по возрастанию</span>
            <svg className="catalog__arrow-icon" width={14} height={11}>
              <use href={sprite + `#arrow-up`} />
            </svg>
          </button>
          <button className={`catalog__sorting-arrow-btn ${isDescendingBtnActive ? `catalog__sorting-arrow-btn--active` : ``}`} type="button" onClick={handleSortDescClick}>
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
  guitars: PropTypes.arrayOf(GuitarShape).isRequired,
  onSortTypeChangeClick: PropTypes.func.isRequired,
  onSortOrderChangeClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getSortedGuitars(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChangeClick(type) {
    dispatch(ActionCreator.changeSortingType(type));
  },
  onSortOrderChangeClick(order) {
    dispatch(ActionCreator.changeSortingOrder(order));
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
