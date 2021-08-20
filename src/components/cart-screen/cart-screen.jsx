import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import CartItem from '../cart-item/cart-item';
import CartPopup from '../cart-popup/cart-popup';
import {AppRoute} from '../../const';
import {getIsDeleteFromCartPopupVisibleStatus} from '../../store/selectors';

const guitars = require(`./../../guitars.json`);

const CartScreen = (props) => {
  const {isDeleteFromCartPopupOpened} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container main__container">
          <h1 className="main__title">Корзина</h1>
          <span className="main__page-title-first">Главная</span><span className="main__page-title-second">Каталог</span><span className="main__page-title-third">Оформляем</span>

          <div className="main__cart-wrapper cart">
            <ul className="cart__list">
              {guitars.map((guitar) =>
                <CartItem
                  key={guitar.article}
                  guitar={guitar}
                />)}
            </ul>

            <div className="cart__ordering-wrapper">
              <div className="cart__ordering-discount">
                <h2>Промокод на скидку</h2>
                <p>Введите свой промокод, если он у вас есть.</p>
                <div className="cart__promo-code-wrapper">
                  <label htmlFor="promo-code" className="visually-hidden">Промокод</label>
                  <input type="text" name="promo-code" id="promo-code" placeholder="GITARAHIT" />
                  <button className="cart__promo-apply-btn" type="button">Применить купон</button>
                </div>
              </div>

              <div className="cart__processing-order-wrapper">
                <p>Всего: 47 000 ₽ </p>
                <Link to={AppRoute.ORDER}>Оформить заказ</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartPopup isVisible={isDeleteFromCartPopupOpened} />
    </React.Fragment>
  );
};

CartScreen.propTypes = {
  isDeleteFromCartPopupOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDeleteFromCartPopupOpened: getIsDeleteFromCartPopupVisibleStatus(state),
});

export {CartScreen};
export default connect(mapStateToProps, null)(CartScreen);

