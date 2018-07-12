import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';


const Modal = (props) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.content}>
        {props.children}
      </div>
      <Link to="/" className={styles.backdrop} onClick={props.clicked}></Link>
    </div>
  )
};

export default Modal;
