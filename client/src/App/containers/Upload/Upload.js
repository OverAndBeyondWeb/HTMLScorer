import React, { Component } from 'react';
import styles from './Upload.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';
import UploadForm from '../../components/UploadForm/UploadForm';

import axios from 'axios';

class Upload extends Component {


  state = {
    fileChosen: false,
    uploadFile: '',
    notes: ''
  }

  handleInputs = (e) => {
    if (e.target.name === 'uploadFile') {
      this.setState({
        uploadFile: e.target.files,
        fileChosen: true
      })
      
    } else {
      this.setState({[e.target.name]: e.target.value});
    }  
    
  }

  submitFile = (e) => {
    e.preventDefault();
    console.log(this.state)
    let formData = new FormData();

    formData.append('uploadFile', this.state.uploadFile[0]);
    
    axios.post('/api/upload-form', formData, {'Content-Type': 'multipart/form-data'})
      .then(resp => {
        this.setState({uploadFile: ''})
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