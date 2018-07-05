import React from 'react';
import styles from './Column.module.scss';

const Column = (props) => {
  return (
    <div className={`${styles.col} ${styles['col-' + props.colType]}`}>
      {props.children}
    </div>
  )
};

export default Column;
