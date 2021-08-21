import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import CartItem from '../cart-item/cart-item';
import CartPopup from '../cart-popup/cart-popup';
import {AppRoute, DEFAULT_LOCALE, PromoCode, GITARAHIT_DISCOUNT_VALUE, SUPERGITARA_DISCOUNT_VALUE, GITARA2020_DISCOUNT_VALUE, MAX_GITARA2020_DISCOUNT_VALUE, ClassName} from '../../const';
import {getGuitarsInCart, getIsDeleteFromCartPopupVisibleStatus} from '../../store/selectors';
import {GuitarShape} from '../../utils';

const CartScreen = (props) => {
  const {guitarsInCart, isDeleteFromCartPopupOpened} = props;

  const [isPromoCodeValid, setIsPromoCodeValid] = useState(true);
  const [promoCodeValue, setPromoCodeValue] = useState(``);
  const [discount, setDiscount] = useState(0);

  const isGuitarsInCart = guitarsInCart.length === 0 ? false : true;

  const totalGuitarsCost = guitarsInCart.reduce(
      (accumulator, guitar, __currentIndex, __array) => {
        accumulator = accumulator + (guitar.price * guitar.numInCart);
        return (accumulator);
      },
      0);

  const handleInputChange = (evt) => {
    setPromoCodeValue(evt.target.value);
  };

  const handleApplyPromoCodeBtnClick = () => {
    if (promoCodeValue !== PromoCode.GITARAHIT && promoCodeValue !== PromoCode.SUPERGITARA && promoCodeValue !== PromoCode.GITARA2020) {
      setIsPromoCodeValid(false);
      setDiscount(0);
    } else if (promoCodeValue === PromoCode.GITARAHIT) {
      setIsPromoCodeValid(true);
      setDiscount(totalGuitarsCost * GITARAHIT_DISCOUNT_VALUE);
    } else if (promoCodeValue === PromoCode.SUPERGITARA) {
      setIsPromoCodeValid(true);
      setDiscount(SUPERGITARA_DISCOUNT_VALUE);
    } else if (promoCodeValue === PromoCode.GITARA2020) {
      setIsPromoCodeValid(true);
      const maxDiscount = totalGuitarsCost * MAX_GITARA2020_DISCOUNT_VALUE;
      if (maxDiscount > GITARA2020_DISCOUNT_VALUE) {
        setDiscount(GITARA2020_DISCOUNT_VALUE);
      } else {
        setDiscount(maxDiscount);
      }
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container main__container">
          <h1 className="main__title">Корзина</h1>
          <span className="main__page-title-first">Главная</span><span className="main__page-title-second">Каталог</span><span className="main__page-title-third">Оформляем</span>

          {isGuitarsInCart &&
            <div className="main__cart-wrapper cart">
              <ul className="cart__list">
                {guitarsInCart.map((guitar) =>
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
                    <input type="text" name="promo-code" id="promo-code" placeholder="GITARAHIT" value={promoCodeValue} onChange={handleInputChange} />
                    <button className="cart__promo-apply-btn" type="button" onClick={handleApplyPromoCodeBtnClick}>Применить купон</button>
                  </div>
                  <span className={isPromoCodeValid ? ClassName.DISPLAY_NONE : ClassName.DISPLAY_BLOCK}>Промокод не действителен</span>
                </div>

                <div className="cart__processing-order-wrapper">
                  <p>Всего: {(totalGuitarsCost - discount).toLocaleString(DEFAULT_LOCALE)} ₽ </p>
                  <Link to={AppRoute.ORDER}>Оформить заказ</Link>
                </div>
              </div>
            </div>
          }
        </div>
      </main>
      <Footer />
      <CartPopup isVisible={isDeleteFromCartPopupOpened} />
    </React.Fragment>
  );
};

CartScreen.propTypes = {
  isDeleteFromCartPopupOpened: PropTypes.bool.isRequired,
  guitarsInCart: PropTypes.arrayOf(GuitarShape),
};

const mapStateToProps = (state) => ({
  guitarsInCart: getGuitarsInCart(state),
  isDeleteFromCartPopupOpened: getIsDeleteFromCartPopupVisibleStatus(state),
});

export {CartScreen};
export default connect(mapStateToProps, null)(CartScreen);

