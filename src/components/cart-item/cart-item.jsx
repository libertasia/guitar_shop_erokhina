import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {DEFAULT_LOCALE} from '../../const';
import sprite from '../../img/sprite.svg';
import {ActionCreator} from '../../store/action';

const CartItem = (props) => {

  const {guitar, onRemoveProductBtnClick} = props;

  const handleDeleteProductBtnClick = () => {
    onRemoveProductBtnClick(true);
  };

  return (
    <li className="cart__list-item cart-item">
      <button className="cart-item__btn-cross" type="button" onClick={handleDeleteProductBtnClick}>
        <span className="visually-hidden">Удалить товар из корзины</span>
        <svg className="cart-item__icon-cross" width={18} height={18}>
          <use href={sprite + `#cross`} />
        </svg>
      </button>

      <picture>
        <source type="image/webp" media="(min-width: 1020px)" srcSet={`${process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.webp`} 1x, ${process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.webp`} 2x`} />
        <img className="cart-item__image" src={process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.jpg`} srcSet={process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.jpg 2x`} width={48} height={124} alt={`Фотография гитары ${guitar.name}`} />
      </picture>

      <div className="cart-item__guitar-info">
        <h3>{guitar.type} {guitar.name}</h3>
        <p>Артикул: {guitar.article}</p>
        <p>{guitar.type}, {guitar.strings} струнная </p>
      </div>

      <div className="cart-item__guitar-price">
        <span>{guitar.price.toLocaleString(DEFAULT_LOCALE)} &#x20bd;</span>
      </div>

      <div className="cart-item__quantity-wrapper">
        <button type="button" className="cart-item__btn cart-item__btn--decrease" aria-label="Уменьшить количество товара" />
        <label htmlFor={`${guitar.article}-quantity`} className="visually-hidden">Изменить количество товара</label>
        <input className="cart-item__input" type="number" name={`${guitar.article}-quantity`} id={`${guitar.article}-quantity`} defaultValue={1} />
        <button type="button" className="cart-item__btn cart-item__btn--increase" aria-label="Увеличить количество товара" />
      </div>

      <div className="cart-item__final-price">
        <span>{guitar.price.toLocaleString(DEFAULT_LOCALE)} &#x20bd;</span>
      </div>
    </li>
  );
};

CartItem.propTypes = {
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
  onRemoveProductBtnClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveProductBtnClick(payload) {
    dispatch(ActionCreator.setIsDeleteFromCartPopupOpened(payload));
  },
});

export {CartItem};
export default connect(null, mapDispatchToProps)(CartItem);
