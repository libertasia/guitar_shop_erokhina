import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, DEFAULT_LOCALE} from '../../const';

const CatalogItem = (props) => {

  const {guitar} = props;

  return (
    <li className="catalog__list-item catalog-item">
      <picture>
        <source type="image/webp" media="(min-width: 1020px)" srcSet={`${process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.webp`} 1x, ${process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.webp`} 2x`} />
        <img className="catalog-item__image" src={process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.jpg`} srcSet={process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.jpg 2x`} width={68} height={190} alt={`Фотография гитары ${guitar.name}`} />
      </picture>

      <div className="catalog-item__reviews">
        <div className="catalog-item__star" />
        <span className="catalog-item__reviews-number">{guitar.reviews}</span>
      </div>

      <div className="catalog-item__info">
        <h3>{guitar.name}</h3>
        <p>{guitar.price.toLocaleString(DEFAULT_LOCALE)}</p>
      </div>

      <div className="catalog-item__links">
        <Link to={AppRoute.GUITAR} className="catalog-item__item-info-link">Подробнее</Link>
        <button className="catalog-item__buy-product-btn" type="button">Купить</button>
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
  }).isRequired,
};

export default CatalogItem;
