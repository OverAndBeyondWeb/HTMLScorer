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
    activeFileDataObject: null,
    scores: {}
  }

  componentDidMount() {
    this.retrieveFile(this.state.activeFile.fileId);
  }

  retrieveFile = (fileId) => {
    axios.get('/api/file/' + fileId)
      .then(resp => {
        let scoresArray = resp.data.Assessments.map(assessment => assessment.score);
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

  currentFileIndex = () => {
    
    const filenames = this.state.filenamesAndIds.map(file => file.filename);
    return filenames.indexOf(this.state.activeFile.filename);
  }

  prevFile = () => {
    let prevIndex = this.currentFileIndex() === 0
      ? this.state.filenamesAndIds.length - 1
      : this.currentFileIndex() - 1;

      this.setState({activeFile: this.state.filenamesAndIds[prevIndex]});
      this.retrieveFile(this.state.filenamesAndIds[prevIndex].fileId);
  }

  nextFile = () => {
    let nextIndex = this.currentFileIndex() === this.state.filenamesAndIds.length - 1
      ? 0
      : this.currentFileIndex() + 1;

      this.setState({activeFile: this.state.filenamesAndIds[nextIndex]});
      this.retrieveFile(this.state.filenamesAndIds[nextIndex].fileId);
  }

  runAssessment = () => {
    const { filename, fileId} = this.state.activeFile;
    axios.post('/api/assess-file', {name: filename, id: fileId})
      .then(resp => {
        this.retrieveFile(this.state.activeFile.fileId);
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
                  Prev File
                </Button>
              </li>
              <li>
                <Button 
                  clicked={this.prevFile}
                  type={'ghost'}
                  width={'100%'}
                >
                  Next File
                </Button>
              </li>
              
              
            </ul>
          </nav>
          <Route path="/file-detail/:id"
            render={() => (<FileDetail
                      scores={this.state.scores} 
                      runAssessment={this.runAssessment}
            />)}
          />
        
      </div>
    )
  }
};

export default FileDetails;