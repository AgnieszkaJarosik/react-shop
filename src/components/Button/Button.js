import React from "react";

import classNames from 'classnames';

import styles from "./Button.module.css";

const Button = ({ onClick, size, children, disabled }) => {
  const classname = classNames({
    [styles.Button]: true,
    // [styles.transparent]: color==='transparent',
    // [styles.gold]: color==='gold',
    [styles.Small]: size==='small',
    [styles.Medium]: size==='medium',
    [styles.Large]: size==='large'
  });

  return (
    <button onClick={onClick} className={classname} disabled={disabled} >{children}</button>
  )
}

export default Button;
