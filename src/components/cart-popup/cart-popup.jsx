import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {DEFAULT_LOCALE, ClassName, Event, ESC_KEY_CODE} from '../../const';
import sprite from '../../img/sprite.svg';
import {getActiveGuitar, getIsAddToCartPopupVisibleStatus, getIsDeleteFromCartPopupVisibleStatus} from '../../store/selectors';
import {onOverlayClick} from '../../utils';
import {ActionCreator} from '../../store/action';

const CartPopup = (props) => {
  const {guitar, isVisible, isAddToCartPopupOpened, isDeleteFromCartPopupOpened, handleClose, onAddBtnClick, onDeleteBtnClick} = props;

  const hiddenClassName = isVisible ? ClassName.DISPLAY_BLOCK : ClassName.DISPLAY_NONE;

  const ref = useRef();

  onOverlayClick(ref, () => handleClose(false));

  const handleOverlayScroll = (evt) => {
    evt.preventDefault();
  };

  const handleClosePopupBtnClick = () => {
    handleClose(false);
  };

  const handleAddBtnClick = () => {
    handleClose(false);
    onAddBtnClick(guitar, true);
  };

  const handleDeleteBtnClick = () => {
    handleClose(false);
    onDeleteBtnClick(guitar, false);
  };

  const handleEscPress = (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      handleClose(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener(Event.WHEEL, handleOverlayScroll, {passive: false});
    }
    return () => {
      window.removeEventListener(Event.WHEEL, handleOverlayScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    document.addEventListener(Event.KEY_DOWN, handleEscPress);

    return () => {
      document.removeEventListener(Event.KEY_DOWN, handleEscPress);
    };
  }, []);

  return (
    isVisible &&
    <div className={`popup-wrapper ${hiddenClassName}`}>
      <section ref={ref} className="popup-wrapper__section cart-popup">
        <div className="cart-popup__wrapper">
          {isAddToCartPopupOpened &&
            <h2>Добавить товар в корзину</h2>
          }
          {isDeleteFromCartPopupOpened &&
            <h2>Удалить этот товар? </h2>
          }

          <button className="cart-popup__btn-cross" type="button" onClick={handleClosePopupBtnClick}>
            <span className="visually-hidden">Закрыть попап</span>
            <svg className="cart-popup__icon-cross" width={18} height={18}>
              <use href={sprite + `#cross`} />
            </svg>
          </button>

          <div className="cart-popup__info-wrapper">
            <picture>
              <source type="image/webp" media="(min-width: 1020px)" srcSet={`${process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.webp`} 1x, ${process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.webp`} 2x`} />
              <img className="cart-popup__image" src={process.env.PUBLIC_URL + `/img/${guitar.imageName}@1x.jpg`} srcSet={process.env.PUBLIC_URL + `/img/${guitar.imageName}@2x.jpg 2x`} width={56} height={128} alt={`Фотография гитары ${guitar.name}`} />
            </picture>

            <div className="cart-popup__guitar-info">
              <h3>{guitar.type} {guitar.name}</h3>
              <p className="cart-popup__guitar-info-item">Артикул: {guitar.article}</p>
              <p className="cart-popup__guitar-info-item">{guitar.type}, {guitar.strings} струнная </p>
              <p className="cart-popup__guitar-info-price">Цена: {guitar.price.toLocaleString(DEFAULT_LOCALE)} &#x20bd;</p>
            </div>

            {isAddToCartPopupOpened &&
              <div className="cart-popup__buttons-wrapper">
                <button className="cart-popup__btn cart-popup__btn--add" type="button" onClick={handleAddBtnClick}>Добавить в корзину</button>
              </div>
            }
            {isDeleteFromCartPopupOpened &&
              <div className="cart-popup__buttons-wrapper">
                <button className="cart-popup__btn cart-popup__btn--delete" type="button" onClick={handleDeleteBtnClick}>Удалить товар</button>
                <button className="cart-popup__btn cart-popup__btn--continue" type="button" onClick={handleClosePopupBtnClick}>Продолжить покупки</button>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

CartPopup.propTypes = {
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
  }),
  isVisible: PropTypes.bool.isRequired,
  isAddToCartPopupOpened: PropTypes.bool.isRequired,
  isDeleteFromCartPopupOpened: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onAddBtnClick: PropTypes.func.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guitar: getActiveGuitar(state),
  isAddToCartPopupOpened: getIsAddToCartPopupVisibleStatus(state),
  isDeleteFromCartPopupOpened: getIsDeleteFromCartPopupVisibleStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleClose(payload) {
    dispatch(ActionCreator.setIsAddToCartPopupOpened(payload));
    dispatch(ActionCreator.setIsDeleteFromCartPopupOpened(payload));
  },
  onAddBtnClick(guitar) {
    dispatch(ActionCreator.setIsSuccessPopupOpened(true));
    dispatch(ActionCreator.setIsInCartStatus(guitar.article, true));
  },
  onDeleteBtnClick(guitar) {
    dispatch(ActionCreator.setIsInCartStatus(guitar.article, false));
  }
});

export {CartPopup};
export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
