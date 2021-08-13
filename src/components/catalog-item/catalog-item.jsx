import React from 'react';
import PropTypes from 'prop-types';

const CatalogItem = (props) => {

  const {guitar} = props;

  return (
    <li className="catalog__list-item catalog-item">
      <picture>
        <source type="image/webp" media="(min-width: 1020px)" srcSet={`${process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.webp`} 1x, ${process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.webp`} 2x`} />
        <img src={process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.jpg`} srcSet={process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.jpg 2x`} width={68} height={190} alt={`Фотография гитары ${guitar.name}`} />
      </picture>

      <div className="catalog-item__reviews">
        <span className="catalog-item__star visually-hidden">Звезда 1</span>
        <span className="catalog-item__star visually-hidden">Звезда 2</span>
        <span className="catalog-item__star visually-hidden">Звезда 3</span>
        <span className="catalog-item__star visually-hidden">Звезда 4</span>
        <span className="catalog-item__star catalog-item__star--last visually-hidden">Звезда 5</span>
        <span className="catalog-item__reviews-number">{guitar.reviews}</span>
      </div>

      <div className="catalog-item__info">
        <h3>{guitar.name}</h3>
        <p>{guitar.price}</p>
      </div>

      <div className="catalog-item__links">
        <a>Подробнее</a>
        <button type="button">Купить</button>
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
