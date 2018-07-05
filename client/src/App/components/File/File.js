import React from 'react';
import styles from './File.module.scss';

const File = (props) => {
  return (
    <div>
      This is a File
      <div>{props.name}</div>
    </div>
  )
};

export default File;
