import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, ClassName, Event, ESC_KEY_CODE} from '../../const';
import sprite from '../../img/sprite.svg';
import {onOverlayClick} from '../../utils';
import {ActionCreator} from '../../store/action';


const SuccessPopup = (props) => {
  const {isVisible, handleClose} = props;

  const hiddenClassName = isVisible ? ClassName.DISPLAY_BLOCK : ClassName.DISPLAY_NONE;

  const ref = useRef();

  onOverlayClick(ref, () => handleClose(false));

  const handleOverlayScroll = (evt) => {
    evt.preventDefault();
  };

  const handleClosePopupBtnClick = () => {
    handleClose(false);
  };

  const handleContinueBtnClick = () => {
    handleClose(false);
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
    <div className={`popup-wrapper ${hiddenClassName}`}>
      <section ref={ref} className="popup-wrapper__section success-popup">
        <div className="success-popup__wrapper">
          <h2>Товар успешно добавлен в корзину</h2>

          <button className="success-popup__btn-cross" type="button" onClick={handleClosePopupBtnClick}>
            <span className="visually-hidden">Закрыть попап</span>
            <svg className="success-popup__icon-cross" width={18} height={18}>
              <use href={sprite + `#cross`} />
            </svg>
          </button>

          <div className="success-popup__buttons-wrapper">
            <Link to={AppRoute.CART} className="success-popup__btn success-popup__btn--go-to-cart" type="button">Перейти в корзину</Link>
            <button className="success-popup__btn success-popup__btn--continue" type="button" onClick={handleContinueBtnClick}>Продолжить покупки</button>
          </div>
        </div>
      </section>
    </div>
  );
};

SuccessPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleClose(payload) {
    dispatch(ActionCreator.setIsSuccessPopupOpened(payload));
  },
});

export {SuccessPopup};
export default connect(null, mapDispatchToProps)(SuccessPopup);
