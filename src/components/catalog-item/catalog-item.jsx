import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, DEFAULT_LOCALE, Rating} from '../../const';
import {ActionCreator} from '../../store/action';

const CatalogItem = (props) => {

  const {guitar, onBuyProductBtnClick} = props;

  const handleBuyProductBtnClick = () => {
    onBuyProductBtnClick(true);
  };

  return (
    <li className="catalog__list-item catalog-item">
      <picture>
        <source type="image/webp" media="(min-width: 1020px)" srcSet={`${process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.webp`} 1x, ${process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.webp`} 2x`} />
        <img className="catalog-item__image" src={process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.jpg`} srcSet={process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.jpg 2x`} width={68} height={190} alt={`Фотография гитары ${guitar.name}`} />
      </picture>

      <div className="catalog-item__reviews">
        <div className="catalog-item__rating-stars">
          <input type="radio" name={`rating-${guitar.article}`} id={`${guitar.article}-rating-5`} value="5" defaultChecked={guitar.rating === Rating.FIVE ? true : false} />
          <label htmlFor={`${guitar.article}-rating-5`}></label>
          <input type="radio" name={`rating-${guitar.article}`} id={`${guitar.article}-rating-4`} value="4" defaultChecked={guitar.rating === Rating.FOUR ? true : false} />
          <label htmlFor={`${guitar.article}-rating-4`}></label>
          <input type="radio" name={`rating-${guitar.article}`} id={`${guitar.article}-rating-3`} value="3" defaultChecked={guitar.rating === Rating.THREE ? true : false} />
          <label htmlFor={`${guitar.article}-rating-3`}></label>
          <input type="radio" name={`rating-${guitar.article}`} id={`${guitar.article}-rating-2`} value="2" defaultChecked={guitar.rating === Rating.TWO ? true : false} />
          <label htmlFor={`${guitar.article}-rating-2`}></label>
          <input type="radio" name={`rating-${guitar.article}`} id={`${guitar.article}-rating-1`} value="1" defaultChecked={guitar.rating === Rating.ONE ? true : false} />
          <label htmlFor={`${guitar.article}-rating-1`}></label>
        </div>
        <span className="catalog-item__reviews-number">{guitar.reviews}</span>
      </div>

      <div className="catalog-item__info">
        <h3>{guitar.name}</h3>
        <p>{guitar.price.toLocaleString(DEFAULT_LOCALE)} &#x20bd;</p>
      </div>

      <div className="catalog-item__links">
        <Link to={AppRoute.GUITAR} className="catalog-item__item-info-link">Подробнее</Link>
        <button className="catalog-item__buy-product-btn" type="button" onClick={handleBuyProductBtnClick}>Купить</button>
      </div>
    </li>
  );
};

CatalogItem.propTypes = {
  guitar: PropTypes.shape({
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
  onBuyProductBtnClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onBuyProductBtnClick(payload) {
    dispatch(ActionCreator.setIsAddToCartPopupOpened(payload));
  },
});

export {CatalogItem};
export default connect(null, mapDispatchToProps)(CatalogItem);
