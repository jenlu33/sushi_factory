import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';
// import Menu from './menu';
import SubMenu from './subMenu';

const Root = () => (
  <HashRouter>
    <div>
        <NavBar />

      <Switch>
        <Route path="/menu" component={SubMenu} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </HashRouter>
)

export default Root;