import React from "react";

import style from "./Header.module.css";

const HeaderSmall = ({ children }) => (
  <h2 className={style.HeaderSmall}>{children}</h2>
);

export default HeaderSmall;
