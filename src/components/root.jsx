import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';

const Root = () => (
  <HashRouter>
    <div>
        <Route path ="/" component={NavBar}/>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </HashRouter>
)

export default Root;