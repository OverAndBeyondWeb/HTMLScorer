import React from 'react';
import styles from './Topbar.module.scss'

const Topbar = (props) => {
  return (
    <div className={[styles.Topbar, styles[props.class]].join(' ')}>
      {props.children}
    </div>
  )
};

export default Topbar;
