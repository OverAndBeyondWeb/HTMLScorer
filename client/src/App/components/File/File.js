import React from 'react';
import styles from './File.module.scss';

import Button from '../Button/Button'

const File = (props) => {
  return (
    <div className={styles.File}>
      <span style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </span>
      
      <div className={styles.filename}>{props.name}</div>
      <hr/>
      <div 
        href="#"
        className={styles.btnContainer} 
        onClick={() => props.runAssessment(props.name, props.id)}
      >
        <Button btnText={'Run Assessment'}/>
      </div>
    </div>
  )
};

export default File;
