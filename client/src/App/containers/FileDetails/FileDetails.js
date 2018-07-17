import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './FileDetails.module.scss'

import FileDetail from '../../components/FileDetail/FileDetail';
import Button from '../../components/Button/Button';

import axios from 'axios';

class FileDetails extends Component {

  state = {
    activeFile: this.props.activeFile,
    filenamesAndIds: this.props.filenamesAndIds,
    scores: {},
    startDate: '',
    endDate: '',
    assessed: null
  }

  componentDidMount() {
    // Call api with id currently in state
    this.retrieveFile(this.state.activeFile.fileId);
  }

  // Make API call using passed in id
  retrieveFile = (fileId) => {

    // API call to get assessments
    axios.get('/api/file-assessments/' + fileId)
      .then(resp => {
        
        // Create an array of scores from assessments
        let scoresArray = resp.data.map(assessment => assessment.score);

        // Create an object of scores from the scoresArray
        let scores = {
          allScores: this.getScoresInRange(scoresArray),
          lowScore: this.getLowScore(scoresArray),
          highScore: this.getHighScore(scoresArray),
          avgScore: this.getAvgScore(scoresArray)
        }

        // Set the scores object in state
        this.setState({scores});
      })
      // Log errors if unsuccessful
      .catch(err => console.log(err.message));
  }

  retrieveDateRangeScores = () => {
   
    axios.get('/api/date-range/' + this.state.activeFile.fileId, {
      params: {
        startDate: this.state.startDate || '2018-01-01',
        endDate: this.state.endDate || '2018-12-31'
      }
    })
      .then(resp => {
        let scoresArray = resp.data.map(assessment => assessment.score);
        let scores = {
          allScores: this.getScoresInRange(scoresArray),
          lowScore: this.getLowScore(scoresArray),
          highScore: this.getHighScore(scoresArray),
          avgScore: this.getAvgScore(scoresArray)
        }
        this.setState({scores});
      })
      .catch(err => console.log(err.message));
  }

  getLowScore = scoresArray => {
    return  scoresArray.length > 0 ? Math.min(...scoresArray) : 0;
  }

  getHighScore = scoresArray => {
    return  scoresArray.length > 0 ? Math.max(...scoresArray) : 0;
  }

  getAvgScore = scoresArray => {
    return  scoresArray.length > 0
      ? Math.round((scoresArray.reduce((curr, acc) => curr + acc))/scoresArray.length) : 0;
  }

  getScoresInRange = (scoresArray, start, end) => {
    return scoresArray.length > 0 ? scoresArray.join(', ') : 0;
  }

  handleDateChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  currentFileIndex = () => {
    
    const filenames = this.state.filenamesAndIds.map(file => file.filename);
    return filenames.indexOf(this.state.activeFile.filename);
  }

  prevFile = () => {
    let prevIndex = this.currentFileIndex() === 0
      ? this.state.filenamesAndIds.length - 1
      : this.currentFileIndex() - 1;

      this.setState(
        prevState => {
          return {activeFile: this.state.filenamesAndIds[prevIndex]}
        },
        this.retrieveDateRangeScores
      );
    
  }

  nextFile = () => {
    let nextIndex = this.currentFileIndex() === this.state.filenamesAndIds.length - 1
      ? 0
      : this.currentFileIndex() + 1;
      console.log(nextIndex);
      this.setState(
        prevState => {
          return {activeFile: this.state.filenamesAndIds[nextIndex]}
        },
        this.retrieveDateRangeScores
      );
  }

  runAssessment = () => {
    const { filename, fileId } = this.state.activeFile;
    axios.post('/api/assess-file', {name: filename, id: fileId})
      .then(resp => {
        this.retrieveFile(this.state.activeFile.fileId);
        this.setState({assessed: resp.data});
        window.onclick = () => {
          this.setState({assessed: null});
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div className={styles.FileDetails}>
        
          <h1>{this.state.activeFile.filename}</h1>
          <nav>
            <ul>
              <li>
                <Button 
                clicked={this.prevFile}
                type={'ghost'}
                width={'auto'}
                >
                  Prev
                </Button>
              </li>
              <li>
                <Button 
                  clicked={this.nextFile}
                  type={'ghost'}
                  width={'100%'}
                >
                  Next
                </Button>
              </li>
              
              
            </ul>
          </nav>
          <Route path="/file-detail"
            render={() => (<FileDetail
                      scores={this.state.scores} 
                      handleDateChange={this.handleDateChange}
                      retrieveDateRangeScores={this.retrieveDateRangeScores}
                      runAssessment={this.runAssessment}
                      assessed={this.state.assessed}
            />)}
          />
        
      </div>
    )
  }
};

export default FileDetails;