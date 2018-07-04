import React from 'react';
import styles from './UploadForm.module.scss';

const UploadForm = (props) => {
  return (
    <div className={styles.UploadForm}>
      <form>
        <label htmlFor="upload">Upload Files</label>
        <input type="file" name="upload" id="upload"/>
        <button className="add-file">Add File</button>
        <textarea name="notes" id="notes" cols="30" rows="5">
          Add notes here...
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default UploadForm;
