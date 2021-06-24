import React from 'react';
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch} from 'react-router-dom';
import NavBar from './navbar';
import Main from './main';
import Menu from './menu/menu';
import Order from "./order";
import Directions from './directions';
import Gallery from './gallery';
import FAQ from './FAQ';
import Footer from "./footer";


ReactGA.initialize("UA-179255435-1");

function Root() {
  const history = createBrowserHistory();
  history.listen(() => {
    ReactGA.set({ page: history.location.hash }); // Update the user's current page
    ReactGA.pageview(history.location.hash); // Record a pageview for the given page
  })

  return (
    <HashRouter>
      <div className="main-div">
        <NavBar />
        
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/order" component={Order} />
          <Route path="/directions" component={Directions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/" component={Main} />
          <Route path="/wakemydyno.txt" />
          
        </Switch>

        <Footer />
      </div>
  </HashRouter>
  )
}

export default Root;