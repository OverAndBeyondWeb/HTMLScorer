import React, { Component } from 'react';
import styles from './Upload.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';
import UploadForm from '../../components/UploadForm/UploadForm';

class Upload extends Component {

  test = (e) => {
    console.log('hit');
    console.log(e);
  }

  render() {
    return (
      <div className={styles.Upload}>
        <Sidebar/>
        <UploadForm test={this.test}/>
      </div>
    )
  }
};

export default Upload;