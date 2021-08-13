import React from 'react';
import sprite from '../../img/sprite.svg';
import CatalogItem from '../catalog-item/catalog-item';

const Catalog = () => {
  // const guitars = require(`./../../guitars.json`);
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
        <CatalogItem />
      </ul>
    </div>
  );
};

export default Catalog;
