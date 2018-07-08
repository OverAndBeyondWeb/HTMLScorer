import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './FileDetails.module.scss'

import FileDetail from '../../components/FileDetail/FileDetail';

import axios from 'axios';

class FileDetails extends Component {

  state = {
    activeFile: this.props.activeFile,
    filenamesAndIds: this.props.filenamesAndIds
  }

  componentDidMount() {
    //axios.get('/file/' + activeFile.id)
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
  }

  nextFile = () => {

  }

  render() {
    return (
        <div className={styles.FileDetails}>
        
          <h1>{this.state.activeFile.filename}</h1>
          <nav>
            <ul>
              <li onClick={this.prevFile}>
                Prev File
              </li>
              <li>
                <Link to="/">Next File</Link>
              </li>
            </ul>
          </nav>
          <Route path="/file-detail/:id" component={FileDetail}/>
        
      </div>
    )
  }
};

export default FileDetails;