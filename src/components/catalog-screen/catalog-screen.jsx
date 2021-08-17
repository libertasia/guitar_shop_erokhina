import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Filter from '../filter/filter';
import Catalog from '../catalog/catalog';
import CartPopup from '../cart-popup/cart-popup';

const CatalogScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container main__container">
          <h1 className="main__title">Каталог гитар</h1>
          <span className="main__page-title-first">Главная</span><span className="main__page-title-second">Каталог</span>

          <div className="main__catalog-wrapper">
            <Filter />
            <Catalog />
          </div>
        </div>
      </main>
      <CartPopup isVisible={true} />
      <Footer />
    </React.Fragment>
  );
};

export default CatalogScreen;
