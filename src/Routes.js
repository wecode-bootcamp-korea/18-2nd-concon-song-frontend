import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
