import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = (props) => {

  const note = 'This checkbox will be used in future versions to select multiple files to be run at once, when the "run assessments" button is clicked from the Topbar component';
  return (
   
    <label className={styles.Checkbox} title={note}>
      <input type="checkbox"/>
      <span className={styles.checkbg}></span>
      <span className={styles.icon}>
          <i className="far fa-check-circle"></i>
        </span>
       Select
    </label>
  );
};

export default Checkbox;