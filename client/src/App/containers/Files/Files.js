import React, { Component } from 'react';
import styles from './Files.module.scss';

import Row from '../../components/Grid/Row/Row';
import Column from '../../components/Grid/Column/Column';
import File from '../../components/File/File';

import axios from 'axios';

class Files extends Component {

  buildRows = (files, filesPerRow) => {
    const rows = [];
    let rowIndex = 0;

    while(files.length !== 0) {
      rows[rowIndex]= [];
      for (let i=0;i<filesPerRow;i++) {
        rows[rowIndex].push(files.pop());
        if (files.length === 0) break;
      }
      rowIndex++;
    }
    return rows;
  }

  runAssessment = (name, id) => {
    console.log(name, id);
    axios.post('/api/assess-file', {name: name, id: id})
      .then()
      .catch();
  }

  render() {

    const rows = this.buildRows(this.props.files, 4);

    const transformedRows = rows.map(row => {
      return (
        <Row>
          {row.map(file => {
            return (
              <Column colType={'1-of-4'}>
                <File 
                  name={file.name}
                  id={file.id} 
                  key={file.id}
                  runAssessment={this.runAssessment}
                />
              </Column>
            );
          })}
        </Row>
      );
    });

    return (
      <div className={styles.Files}>
        <h1>This is the Files component</h1>
        {transformedRows}
      </div>
    )
  }
};

export default Files;
