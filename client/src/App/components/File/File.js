import React from 'react';
import { Link } from 'react-router-dom';
import styles from './File.module.scss';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

const File = (props) => {
  const { assessments } = props;
  const latestScore = assessments.length > 0 ? assessments[assessments.length-1].score : 'No Score Yet';

  return (
    <div className={styles.File}>
      <span style={{fontSize:'50px'}}>
        <i className="far fa-file-code" ></i>
      </span>
      
      <div className={styles.filename}>{props.name}</div>
      <hr/>
      <div className={styles.score}>
        <div>Latest Score:</div>
        <div>{latestScore}</div>
      </div>
      <div className={styles.action}>
        <Checkbox/>
        <Link to={'/file-detail/fiel-' + props.id}>
        <Button type={'details'} width={'30%'} clicked={props.showFileDetails}>
          Details...
        </Button>
        </Link>
      </div>
      
    </div>
  )
};

export default File;
