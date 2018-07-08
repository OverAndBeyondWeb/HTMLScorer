import React from 'react';
import styles from './UploadForm.module.scss';

import Topbar from '../Topbar/Topbar';
import Button from '../Button/Button';

const UploadForm = (props) => {

  return (
    <div className={styles.UploadForm}>
      <Topbar>
        <h1>HTML Scorer</h1>
        <nav>
          <ul>
            <li><a>All Files</a></li>
            <li><a>Top Score</a></li>
          </ul>
        </nav>
        <hr/>
      </Topbar>
      <form>

        <h2>Upload Files</h2>
        <input type="file" name="upload" id="upload" className={styles.upload}/>
        <label htmlFor="upload">
          <i className="fas fa-upload" style={{marginRight: '5px'}}></i>
          Choose a file...
        </label>
        
        <Button type={'ghost'} width={'12%'}>
          Add File
          <span className={styles.plusIcon}>
          <i class="fas fa-plus-circle"></i>
          </span>
          
        </Button>
        <textarea name="notes" id="notes" cols="30" rows="5" defaultValue="Add notes here...">
          
        </textarea>
        
          <Button type={'full'} width={'25%'}>
            Submit
          </Button>
        
          
          
    
        
      </form>
    </div>
  )
};

export default UploadForm;
