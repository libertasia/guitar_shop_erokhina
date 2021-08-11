import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const CartScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container">
          <p>It is main</p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default CartScreen;
