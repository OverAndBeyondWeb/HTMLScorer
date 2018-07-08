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
    activeFileDataObject: null
  }

  componentDidMount() {
    this.retrieveFile(this.state.activeFile.fileId);
  }

  retrieveFile = (fileId) => {
    axios.get('/api/file/' + fileId)
      .then(resp => {
        console.log(resp.data);
        this.setState({activeFileDataObject: resp.data});
      })
      .catch(err => console.log(err.message));
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

  }

  runAssessment = () => {
    console.log('assessed');
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
                      file={this.state.activeFileDataObject} 
                      runAssessment={this.runAssessment}
            />)}
          />
        
      </div>
    )
  }
};

export default FileDetails;