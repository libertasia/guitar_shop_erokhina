import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import logo from '../../img/logo.svg';
import sprite from '../../img/sprite.svg';
import {getGuitarsInCart} from '../../store/selectors';
import {GuitarShape} from '../../utils';

const Header = (props) => {
  const {guitarsInCart} = props;

  const isGuitarsInCart = guitarsInCart.length === 0 ? false : true;

  return (
    <header className="header">
      <nav className="container header__navigation">
        <div className="header__logo">
          <Link to={AppRoute.ROOT}>
            <img src={logo} width={67} height={70} alt="Логотип Guitar Shop»" />
          </Link>
        </div>

        <ul className="header__navigation-list">
          <li className="header__navigation-item"><Link to={AppRoute.ROOT}>Каталог</Link></li>
          <li className="header__navigation-item"><Link to={AppRoute.CONTACTS}>Где купить?</Link></li>
          <li className="header__navigation-item"><Link to={AppRoute.COMPANY}>О компании</Link></li>
          <li className="header__navigation-item"><Link to={AppRoute.SERVICE_CENTERS}>Cервис-центры</Link></li>
        </ul>

        <ul className="header__user-navigation-list">
          <li className="header__user-navigation-item">
            <a className="header__user-navigation-link" href="#" aria-label="Месторасположение">
              <span className="visually-hidden">Месторасположение</span>
              <svg className="header__user-navigation-icon-map" width={14} height={17}>
                <use href={sprite + `#icon-map`} />
              </svg>
            </a>
          </li>
          <li className="header__user-navigation-item">
            <a className="header__user-navigation-link" href="#" aria-label="Поиск">
              <span className="visually-hidden">Поиск</span>
              <svg className="header__user-navigation-icon" width={14} height={14}>
                <use href={sprite + `#icon-search`} />
              </svg>
            </a>
          </li>
          <li className="header__user-navigation-item header__user-navigation-item--cart">
            <Link className="header__user-navigation-link" to={AppRoute.CART} aria-label="Корзина">
              <span className="visually-hidden">Корзина</span>
              <svg className="header__user-navigation-icon" width={14} height={14}>
                <use href={sprite + `#icon-cart`} />
              </svg>
            </Link>
            {isGuitarsInCart &&
              <span>{guitarsInCart.length}</span>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  guitarsInCart: PropTypes.arrayOf(GuitarShape),
};

const mapStateToProps = (state) => ({
  guitarsInCart: getGuitarsInCart(state),
});

export {Header};
export default connect(mapStateToProps, null)(Header);
