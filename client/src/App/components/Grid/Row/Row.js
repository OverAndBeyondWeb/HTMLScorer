import React from 'react';
import styles from './Row.module.scss';

const Row = (props) => {
  return (
    <div className={styles.Row}>
      {props.children}
    </div>
  )
};

export default Row;