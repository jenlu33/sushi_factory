import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';
import Menu from './menu';

const Root = () => (
  <HashRouter>
    <div>
        <NavBar />
        
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </HashRouter>
)

export default Root;