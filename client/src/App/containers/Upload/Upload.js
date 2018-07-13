import React, { Component } from 'react';
import styles from './Upload.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';
import UploadForm from '../../components/UploadForm/UploadForm';

import axios from 'axios';

class Upload extends Component {


  state = {
    uploadFile: '',
    notes: ''
  }

  handleInputs = (e) => {
    if (e.target.name === 'uploadForm') {
      this.setState({uploadFile: e.target.files[0]})
    } else {
      this.setState({[e.target.name]: e.target.files});
    }  
    
  }

  submitFile = (file) => {
    // e.preventDefault();

    
    axios.post('/api/upload-form', {uploadFile:file}, {'Content-Type': 'multipart/form-data'})
      .then(resp => {
        console.log(resp);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles.Upload}>
        
        <Sidebar
          files={this.props.files}
          showFileDetails={this.props.showFileDetails}
        />
        <UploadForm
          handleInputs={this.handleInputs}
          inputs={{...this.state}}
          submitFile={this.submitFile}
        />
      </div>
    )
  }
};

export default Upload;