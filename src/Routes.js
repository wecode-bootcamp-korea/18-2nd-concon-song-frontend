import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import SearchResult from './Pages/SearchResult/SearchResult';

class Routes extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/main" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/searchResult" component={SearchResult} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default Routes;
