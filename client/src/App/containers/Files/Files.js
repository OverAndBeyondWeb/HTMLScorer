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
    this.getFilesPerRow();
    window.onresize = this.getFilesPerRow;
  }

  getFilesPerRow = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 800) {
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

  runAssessment = (name, id) => {
    axios.post('/api/assess-file', {name: name, id: id})
      .then()
      .catch();
  }

  render() {

    console.log(this.state.filesPerRow);
    const rows = this.buildRows(this.props.files, this.state.filesPerRow);

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

    return (
      <div className={styles.Files} id="allFiles">
        <Topbar class={'filesComponent'}>
          <h1>HTML Scorer</h1>
          <nav>
            <ul>
              <li><a>Selected Files[0]</a></li>
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
