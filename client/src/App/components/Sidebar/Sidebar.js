import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const filenames = props.files.map(file => {
    return (
      <li className={styles.filename} key={file.id}>
        <Link to={'/file-detail/file-' + file.id } onClick={(fileId, filename) => props.showFileDetails(file.id, file.name)}>
          {file.name}
        </Link>
      </li>
    )
  });

  return (
    <div className={styles.Sidebar}>
      <div style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </div>
      <h3>Assessed Files</h3>
      <ul className={styles.filenamesList}>
        {filenames}
      </ul>
      
    </div>
  )
};

export default Sidebar;
