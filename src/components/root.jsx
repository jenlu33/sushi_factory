import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';
import Menu from './menu/menu';
import Order from "./order";
import Directions from './directions';
import Footer from "./footer";

const Root = () => (
  <HashRouter>
    <div>
      <NavBar />
      
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/order" component={Order} />
        <Route path="/directions" component={Directions} />
        <Route path="/" component={Main} />
      </Switch>

      <Footer />
    </div>
  </HashRouter>
)

export default Root;