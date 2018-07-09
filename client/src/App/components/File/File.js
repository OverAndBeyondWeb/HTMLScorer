import React from 'react';
import styles from './File.module.scss';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

const File = (props) => {
  return (
    <div className={styles.File}>
      <span style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </span>
      
      <div className={styles.filename}>{props.name}</div>
      <hr/>
      <div className={styles.action}>
        <Checkbox/>
        <Button type={'details'} width={'30%'} clicked={props.showFileDetails}>
          Details...
        </Button>
      </div>
      
    </div>
  )
};

export default File;
