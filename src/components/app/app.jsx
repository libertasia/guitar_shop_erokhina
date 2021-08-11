import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import CatalogScreen from '../catalog-screen/catalog-screen';
import '../../scss/style.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <CatalogScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default App;
