import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {DEFAULT_LOCALE, RADIX} from '../../const';
import sprite from '../../img/sprite.svg';
import {ActionCreator} from '../../store/action';
import {GuitarShape} from '../../utils';

const CartItem = (props) => {

  const {guitar, onRemoveProductBtnClick, onDecreaseBtnClick, onIncreaseBtnClick, onProductCountChanged} = props;

  const [inputValue, setInputValue] = useState(guitar.numInCart);

  const finalItemPrice = (guitar.price * guitar.numInCart).toLocaleString(DEFAULT_LOCALE);

  const handleDeleteProductBtnClick = () => {
    onRemoveProductBtnClick(guitar.article);
  };

  const handleDecreaseBtnClick = () => {
    onDecreaseBtnClick(guitar.article, guitar.numInCart);
  };

  const handleIncreaseBtnClick = () => {
    onIncreaseBtnClick(guitar.article);
  };

  const handleInputChange = (evt) => {
    const newCount = parseInt(evt.target.value, RADIX);
    if (!newCount) {
      setInputValue(``);
    } else {
      setInputValue(newCount);
      onProductCountChanged(guitar.article, newCount);
    }
  };

  const handleInputBlur = () => {
    if (!inputValue || inputValue === ``) {
      setInputValue(guitar.numInCart);
    }
  };

  useEffect(() => {
    if (guitar.numInCart) {
      setInputValue(guitar.numInCart);
    }
  }, [guitar.numInCart]);

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
        <button type="button" className="cart-item__btn cart-item__btn--decrease" aria-label="Уменьшить количество товара" onClick={handleDecreaseBtnClick} />
        <label htmlFor={`${guitar.article}-quantity`} className="visually-hidden">Изменить количество товара</label>
        <input className="cart-item__input" type="number" name={`${guitar.article}-quantity`} id={`${guitar.article}-quantity`} value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} />
        <button type="button" className="cart-item__btn cart-item__btn--increase" aria-label="Увеличить количество товара" onClick={handleIncreaseBtnClick} />
      </div>

      <div className="cart-item__final-price">
        <span>{finalItemPrice} &#x20bd;</span>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  guitar: GuitarShape,
  onRemoveProductBtnClick: PropTypes.func.isRequired,
  onDecreaseBtnClick: PropTypes.func.isRequired,
  onIncreaseBtnClick: PropTypes.func.isRequired,
  onProductCountChanged: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveProductBtnClick(id) {
    dispatch(ActionCreator.setActiveProductId(id));
    dispatch(ActionCreator.setIsDeleteFromCartPopupOpened(true));
  },
  onDecreaseBtnClick(id, numInCart) {
    if (numInCart > 1) {
      dispatch(ActionCreator.removeOneFromCart(id));
    } else {
      dispatch(ActionCreator.setActiveProductId(id));
      dispatch(ActionCreator.setIsDeleteFromCartPopupOpened(true));
    }
  },
  onIncreaseBtnClick(id) {
    dispatch(ActionCreator.addOneToCart(id));
  },
  onProductCountChanged(id, count) {
    dispatch(ActionCreator.changeProductCount(id, count));
  },
});

export {CartItem};
export default connect(null, mapDispatchToProps)(CartItem);
