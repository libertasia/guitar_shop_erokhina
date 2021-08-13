import React from 'react';

const CatalogItem = () => {
  const guitars = require(`./../../guitars.json`);

  return (
    <li className="catalog__list-item catalog-item">
      <img src={process.env.PUBLIC_URL + `/img/arrow-down.svg`} />
      {/* <picture>
        <source type="image/webp" media="(min-width: 1024px)" srcSet={`${activeImage.webp1x} 1x, ${activeImage.webp2x} 2x`} />
        <img src={activeImage.jpg1x} srcSet={`${activeImage.jpg2x} 2x`} width={600} height={375} alt={activeImage.alt} />
      </picture> */}
      <div className="catalog-item__reviews">
        <span className="catalog-item__star visually-hidden">Звезда 1</span>
        <span className="catalog-item__star visually-hidden">Звезда 2</span>
        <span className="catalog-item__star visually-hidden">Звезда 3</span>
        <span className="catalog-item__star visually-hidden">Звезда 4</span>
        <span className="catalog-item__star catalog-item__star--last visually-hidden">Звезда 5</span>
        <span className="catalog-item__reviews-number">Reviews number</span>
      </div>
      <div className="catalog-item__info">
        <h3>{guitars[0].type}</h3>
        <p>guitar price</p>
      </div>
      <div className="catalog-item__links">
        <a>Подробнее</a>
        <button type="button">Купить</button>
      </div>
    </li>
  );
};

export default CatalogItem;
