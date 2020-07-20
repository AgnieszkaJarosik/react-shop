import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

import Container from "components/Container/Container";
import Cart from "../Cart/Cart";

const Nav = () => (
  <nav className={styles.Navbar}>
    <Container>
      <ul className={styles.Nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
    <Cart />
  </nav>
);

export default Nav;
