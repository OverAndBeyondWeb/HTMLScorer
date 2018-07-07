import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={[styles.Button, styles[props.type]].join(' ')}
      style={{width: props.width}}
    >
      {props.children}
    </button>
  )
};

export default Button;