import React, { Component } from 'react';
import styles from './Upload.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';
import UploadForm from '../../components/UploadForm/UploadForm';

class Upload extends Component {

  render() {
    return (
      <div className={styles.Upload}>
        
        <Sidebar
          files={this.props.files}
          showFileDetails={this.props.showFileDetails}
        />
        <UploadForm test={this.test}/>
      </div>
    )
  }
};

export default Upload;