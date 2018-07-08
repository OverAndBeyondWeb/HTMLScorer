import React from 'react';
import styles from './Modal.module.scss';


const Modal = (props) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.backdrop} onClick={props.clicked}></div>
    </div>
  )
};

export default Modal;
