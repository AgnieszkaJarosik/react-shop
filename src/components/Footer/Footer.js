import React from "react";

import styles from "./Footer.module.css";

import Container from "components/Container/Container";

const Footer = () => (
  <footer className={styles.Footer}>
    <Container>
      <p>
        Shop © 2020 <br /> Designed by Andrzej
      </p>
    </Container>
  </footer>
);

export default Footer;
