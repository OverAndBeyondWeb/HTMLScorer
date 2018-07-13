import React, { Component } from 'react';
import styles from './Files.module.scss';

import Row from '../../components/Grid/Row/Row';
import Column from '../../components/Grid/Column/Column';
import Topbar from '../../components/Topbar/Topbar';
import File from '../../components/File/File';
import Button from '../../components/Button/Button';

import axios from 'axios';

class Files extends Component {

  state = {
    filesPerRow: null
  }

  componentDidMount () {
    /* ***********************************************
    I used the resize event to calculate my responsive
    grid layout
    I chose this method along with floats to demonstrate
    strategies for older browsers, however I am able to
    acheive a responsive layout using flexbox or CSS
    grid for modern browsers also
    **************************************************/
    this.getFilesPerRow();
    window.onresize = this.getFilesPerRow;
  }
  
  // Choose number of files per row from screen size
  getFilesPerRow = () => {
    if (window.innerWidth < 600) {
      this.setState({
        filesPerRow: 1});
      return;
    }

    if (window.innerWidth < 1100) {
      this.setState({
        filesPerRow: 2});
      return;
    }

    if (window.innerWidth < 1450) {
      this.setState({
        filesPerRow: 3});
      return;
    }

    this.setState({
      filesPerRow: 4});
  }
  
  // Create an array of data to build rows of files
  buildRows = (files, filesPerRow) => {
    const rows = [];
    const filesCopy = [...files];
    let rowIndex = 0;

    while(filesCopy.length !== 0) {
      rows[rowIndex] = {};
      rows[rowIndex]['columnsArray'] = [];
      rows[rowIndex]['id'] = rowIndex;

      for (let i=0;i<filesPerRow;i++) {
        rows[rowIndex]['columnsArray'].push(filesCopy.pop());
        if (filesCopy.length === 0) break;
      }
      rowIndex++;
    }
    return rows;
  }

  // Score a file and add it to the database
  runAssessment = (name, id) => {
    axios.post('/api/assess-file', {name: name, id: id})
      .then()
      .catch();
  }

  render() {

    // Create file data array
    const rows = this.buildRows(this.props.files, this.state.filesPerRow);

    // Transform file data array to components in a grid
    const transformedRows = rows.map(row => {
      return (
        <Row key={row.id}>
          {row.columnsArray.map(file => {
            return (
              <Column colType={'1-of-' + this.state.filesPerRow} key={file.id}>
                <File 
                  name={file.name}
                  id={file.id}
                  assessments={file.Assessments} 
                  showFileDetails={() => this.props.showFileDetails(file.id, file.name)}
                />
              </Column>
            );
          })}
        </Row>
      );
    });

    const note = 'These options would be used in a future version that allows the user to select a number of files and then score them all'
    return (
      <div className={styles.Files} id="allFiles">
        <Topbar class={'filesComponent'}>
          <h1>HTML Scorer</h1>
          <nav title={note}>
            <ul>
              <li><a>Selected[0]</a></li>
              <li>
                <Button type={'topbarRunBtn'} width={'auto'}>
                Run Assessments
                <span className={styles.playIcon}>
                  <i className="fas fa-play"></i>
                </span>
              </Button>
              </li>
            </ul>
          </nav>
          <hr/>
        </Topbar>
        {transformedRows}
      </div>
    )
  }
};

export default Files;
