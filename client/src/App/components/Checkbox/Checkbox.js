import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
  return (
   
    <label className={styles.Checkbox}>
      <input type="checkbox"/>
      <span className={styles.checkbg}></span>
      <span className={styles.icon}>
          <i className="far fa-check-circle"></i>
        </span>
       Select File
    </label>
  );
};

export default Checkbox;