import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';
import Menu from './menu';
// import MenuSection from './menuSection';

const Root = () => (
  <HashRouter>
    <div>
        {/* <NavBar /> */}

      <Switch>
        {/* <Route path="/menu" component={Menu} /> */}
        <Route path="/" component={Menu} />
      </Switch>
    </div>
  </HashRouter>
)

export default Root;