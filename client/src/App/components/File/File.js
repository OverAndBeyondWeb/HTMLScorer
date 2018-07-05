import React from 'react';
import styles from './File.module.scss';

const File = (props) => {
  return (
    <div className={styles.File}>
      <span style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </span>
      
      <div className={styles.filename}>{props.name}</div>
      <hr/>
      <a 
        href="#"
        className={styles.btn} 
        onClick={() => props.runAssessment(props.name, props.id)}>Run Assessment</a>
    </div>
  )
};

export default File;
