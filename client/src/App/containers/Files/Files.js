import React, { Component } from 'react';
import styles from './Files.module.scss';

import Row from '../../components/Grid/Row/Row';
import Column from '../../components/Grid/Column/Column';
import Topbar from '../../components/Topbar/Topbar';
import File from '../../components/File/File';
import Button from '../../components/Button/Button';

import axios from 'axios';

class Files extends Component {

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
    const rows = this.buildRows(this.props.files, 4);
    const transformedRows = rows.map(row => {
      return (
        <Row key={row.id}>
          {row.columnsArray.map(file => {
            return (
              <Column colType={'1-of-4'} key={file.id}>
                <File 
                  name={file.name}
                  id={file.id} 
                  showFileDetails={() => this.props.showFileDetails(file.id, file.name)}
                />
              </Column>
            );
          })}
        </Row>
      );
    });

    return (
      <div className={styles.Files}>
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
