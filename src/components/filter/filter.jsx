import React from 'react';

const Filter = () => {
  return (
    <section className="main__catalog-filter filter">
      <h2 className="filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="get">
        <section className="filter__form-section">
          <h3>Цена, <span className="filter__rub">&#x20bd;</span></h3>
          <div className="filter__price-wrapper">
            <label className="visually-hidden" htmlFor="min-price">Цена от</label>
            <input type="number" placeholder="1000" id="min-price" name="min-price" />
            <span className="filter__price-dash" />
            <label className="visually-hidden" htmlFor="max-price">Цена до</label>
            <input type="number" placeholder="30000" id="max-price" name="max-price" />
          </div>
        </section>

        <section className="filter__form-section">
          <h3>Тип гитар</h3>
          <ul className="filter__guitar-type-list">
            <li className="filter__guitar-type-item">
              <input type="checkbox" id="acoustic" name="acoustic"/>
              <label htmlFor="acoustic">Акустические гитары</label>
            </li>
            <li className="filter__guitar-type-item">
              <input type="checkbox" id="electric" name="electric"/>
              <label htmlFor="electric">Электрогитары</label>
            </li>
            <li className="filter__guitar-type-item">
              <input type="checkbox" id="ukulele" name="ukulele"/>
              <label htmlFor="ukulele">Укулеле</label>
            </li>
          </ul>
        </section>

        <section className="filter__form-section">
          <h3>Количество струн</h3>
          <ul className="filter__guitar-strings-list">
            <li className="filter__guitar-string-item">
              <input type="checkbox" id="4" name="4"/>
              <label htmlFor="4">4</label>
            </li>
            <li className="filter__guitar-string-item">
              <input type="checkbox" id="6" name="6"/>
              <label htmlFor="6">6</label>
            </li>
            <li className="filter__guitar-string-item">
              <input type="checkbox" id="7" name="7"/>
              <label htmlFor="7">7</label>
            </li>
            <li className="filter__guitar-string-item">
              <input type="checkbox" id="12" name="12"/>
              <label htmlFor="12">12</label>
            </li>
          </ul>
        </section>

        <button type="button">показать</button>
      </form>
    </section>
  );
};

export default Filter;
