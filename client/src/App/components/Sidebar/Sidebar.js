import React from 'react';
import styles from './Sidebar.module.scss'

const Sidebar = (props) => {
  return (
    <div className={styles.Sidebar}>
      <div style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </div>
      <h3>Assessed Files</h3>
    </div>
  )
};

export default Sidebar;
