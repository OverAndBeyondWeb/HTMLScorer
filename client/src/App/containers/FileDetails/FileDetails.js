import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './FileDetails.module.scss'

import FileDetail from '../../components/FileDetail/FileDetail';

class FileDetails extends Component {
  render() {
    return (
      <Router>
        <div className={styles.FileDetails}>
        
          This is the file details component
          <nav>
            <ul>
              <li>
                <Link to="/">Prev File</Link>
              </li>
              <li>
                <Link to="/">Next File</Link>
              </li>
            </ul>
          </nav>
          <Route path="/file-detail" component={FileDetail}/>
        
      </div>
      </Router>
    )
  }
};

export default FileDetails;