import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";
import HomePage from "pages/Home/HomePage";

import store from "./store";
import "./fontello/css/fontello.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/about" component={AboutPage} />
      </Container>
      <Footer />
    </Router>
  </Provider>
);

export default App;
