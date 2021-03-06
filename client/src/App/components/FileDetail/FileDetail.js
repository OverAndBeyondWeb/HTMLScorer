import React from 'react';
import Button from '../Button/Button';

import styles from './FileDetail.module.scss';

const FileDetail = (props) => {

  let message = props.assessed
    ? `${props.assessed.message}! The file scored ${props.assessed.score} points`
    : null;

  return (
    <div className={styles.FileDetail}>
      <div className={styles.score}>
        <span> all scores from </span>
        <input
          id="date"
          type="date"
          min="2018-01-01"
          max="2018-12-31"
          name="startDate"
          value={props.startDate}
          onChange={props.handleDateChange} />
        <span> to </span>
        <input
          id="date"
          type="date"
          min="2018-01-01"
          max="2018-12-31"
          name="endDate"
          value={props.endDate}
          onChange={props.handleDateChange}/>
          <Button type={'changeDate'} width={'150px'} clicked={props.retrieveDateRangeScores}>
            Change Date
          </Button>
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
      <div>{message}</div>
    </div>
    
  )
};

export default FileDetail;
