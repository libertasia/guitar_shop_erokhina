import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import Filter from '../filter/filter';
import Catalog from '../catalog/catalog';
import CartPopup from '../cart-popup/cart-popup';
import SuccessPopup from '../success-popup/success-popup';
import {getIsAddToCartPopupVisibleStatus, getIsSuccessPopupVisibleStatus} from '../../store/selectors';
import {AppRoute} from '../../const';

const CatalogScreen = (props) => {

  const {isAddToCartPopupOpened, isSuccessPopupOpened} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container main__container">
          <h1 className="main__title">Каталог гитар</h1>
          <ol className="main__breadcrumbs-list">
            <li className="main__breadcrumbs-item"><a href="#" className="main__breadcrumbs-link">Главная</a></li>
            <li className="main__breadcrumbs-item"><Link to={AppRoute.ROOT} className="main__breadcrumbs-link">Каталог</Link></li>
          </ol>

          <div className="main__catalog-wrapper">
            <Filter />
            <Catalog />
          </div>
        </div>
      </main>
      <Footer />
      <CartPopup isVisible={isAddToCartPopupOpened} />
      <SuccessPopup isVisible={isSuccessPopupOpened}/>
    </React.Fragment>
  );
};

CatalogScreen.propTypes = {
  isAddToCartPopupOpened: PropTypes.bool.isRequired,
  isSuccessPopupOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAddToCartPopupOpened: getIsAddToCartPopupVisibleStatus(state),
  isSuccessPopupOpened: getIsSuccessPopupVisibleStatus(state),
});

export {CatalogScreen};
export default connect(mapStateToProps, null)(CatalogScreen);
