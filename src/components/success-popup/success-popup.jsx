import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, ClassName} from '../../const';
import sprite from '../../img/sprite.svg';


const SuccessPopup = (props) => {
  const {isVisible} = props;

  const hiddenClassName = isVisible ? ClassName.DISPLAY_BLOCK : ClassName.DISPLAY_NONE;

  return (
    <div className={`popup-wrapper ${hiddenClassName}`}>
      <section className="popup-wrapper__section success-popup">
        <div className="success-popup__wrapper">
          <h2>Товар успешно добавлен в корзину</h2>

          <button className="success-popup__btn-cross" type="button">
            <span className="visually-hidden">Закрыть попап</span>
            <svg className="success-popup__icon-cross" width={18} height={18}>
              <use href={sprite + `#cross`} />
            </svg>
          </button>

          <div className="success-popup__buttons-wrapper">
            <Link to={AppRoute.CART} className="success-popup__btn success-popup__btn--go-to-cart" type="button">Перейти в корзину</Link>
            <button className="success-popup__btn success-popup__btn--continue" type="button">Продолжить покупки</button>
          </div>
        </div>
      </section>
    </div>
  );
};

SuccessPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default SuccessPopup;
