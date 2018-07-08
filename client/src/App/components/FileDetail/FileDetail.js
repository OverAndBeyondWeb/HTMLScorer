import React from 'react';
import Button from '../Button/Button';

const FileDetail = (props) => {
  console.log(props.file);
  return (
    <div>
      <div>
        all scores from 
        <input id="date" type="date" min="2018-01-01" max="2018-12-31" />
        to
        <input id="date" type="date" min="2018-01-01" max="2018-12-31"/>
      </div>
      <div>
        highest score: 
      </div>
      <div>
        lowest score:
      </div>
      <div>
        average score:
      </div>
      <Button type={'full'} width={'80%'} clicked={props.runAssessment}>
        Run Assessment
      </Button>
    </div>
    
  )
};

export default FileDetail;
