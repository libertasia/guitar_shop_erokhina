import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const CartScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container main__container">
          <h1 className="main__title">Корзина</h1>
          <span className="main__page-title-first">Главная</span><span className="main__page-title-second">Каталог</span><span className="main__page-title-third">Оформляем</span>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default CartScreen;
