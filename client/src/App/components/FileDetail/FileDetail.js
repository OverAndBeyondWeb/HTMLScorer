import React from 'react';
import Button from '../Button/Button';

import styles from './FileDetail.module.scss';

const FileDetail = (props) => {
  
  return (
    <div className={styles.FileDetail}>
      <div className={styles.score}>
        <span> all scores from </span>
        <input id="date" type="date" min="2018-01-01" max="2018-12-31" />
        <span> to </span>
        <input id="date" type="date" min="2018-01-01" max="2018-12-31"/>
      </div>
      <div className={styles.score}>
        {props.scores.allScores}
      </div>
      <div className={styles.score}>
        highest score: {props.scores.highScore}
      </div>
      <div className={styles.score}>
        lowest score: {props.scores.lowScore}
      </div>
      <div className={styles.score}>
        average score: {props.scores.avgScore}
      </div>
      <Button type={'full'} width={'100%'} clicked={() => props.runAssessment()}>
        Run Assessment
      </Button>
    </div>
    
  )
};

export default FileDetail;
