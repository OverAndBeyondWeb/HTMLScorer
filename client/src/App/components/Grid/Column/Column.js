import React from 'react';
import styles from './Column.module.scss';
const Column = (props) => {
  console.log(`styles.col styles.col-${props.colType}`);
  return (
    <div className={`${styles.col} ${styles['col-' + props.colType]}`}>
      {props.children}
    </div>
  )
};

export default Column;
