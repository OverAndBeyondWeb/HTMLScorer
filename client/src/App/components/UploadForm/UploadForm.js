import React from 'react';
import styles from './UploadForm.module.scss';

import Topbar from '../Topbar/Topbar';
import Button from '../Button/Button';

const UploadForm = (props) => {

  return (
    <div className={styles.UploadForm}>
      <Topbar class={'uploadFormComponent'}>
        <h1>HTML Scorer</h1>
        <nav>
          <ul>
            <li><a href="#allFiles">All Files</a></li>
          </ul>
        </nav>
        <hr/>
      </Topbar>
      <form>

        <h2>Upload Files</h2>
        <input 
          type="file"
          name="uploadFile" id="upload"
          className={styles.upload}
          onChange={props.handleInputs}
        />
        <label htmlFor="upload">
          <i className="fas fa-upload" style={{marginRight: '5px'}}></i>
          {!props.inputs.fileChosen ? 'Choose a file...' : '1 file chosen'}
        </label>
        
        {/* 
        *** This will be used to allow users to upload multiple files ***
        
        <Button type={'ghost'} width={'20%'}>
          Add File
          <span className={styles.plusIcon}>
          <i className="fas fa-plus-circle"></i>
          </span>
          
        </Button> 
        
        ******************************************************************
        */}
        <textarea 
          name="notes"
          id="notes"
          cols="30"
          rows="5"
          defaultValue="Add notes here..."
          value={props.inputs.note}
          onChange={props.handleInputs}
        > 
        </textarea>
        
        <Button type={'full'} width={'25%'} clicked={props.submitFile}>
          Submit
        </Button>
        
          
          
    
        
      </form>
    </div>
  )
};

export default UploadForm;
