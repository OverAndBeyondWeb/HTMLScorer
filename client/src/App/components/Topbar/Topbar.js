import React from 'react';
import styles from './Topbar.module.scss'

const Topbar = (props) => {
  return (
    <div className={styles.Topbar}>
      {props.children}
    </div>
  )
};

export default Topbar;
