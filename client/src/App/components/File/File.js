import React from 'react';
import styles from './File.module.scss';

const File = (props) => {
  return (
    <div className={styles.File}>
      This is a File
      <div>{props.name}</div>
      <button onClick={() => props.runAssessment(props.name, props.id)}>Run Assessment</button>
    </div>
  )
};

export default File;
