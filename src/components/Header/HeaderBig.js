import React from "react";

import style from "./Header.module.css";

const HeaderBig = ({ children }) => (
  <h1 className={style.HeaderBig}>{children}</h1>
);

export default HeaderBig;
