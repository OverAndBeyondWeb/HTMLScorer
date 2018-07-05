import React, { Component } from 'react';
import styles from './Files.module.scss';

import Row from '../../components/Grid/Row/Row';
import Column from '../../components/Grid/Column/Column';
import File from '../../components/File/File';

import axios from 'axios';

class Files extends Component {

  state = {
    files: []
  }

  componentDidMount() {
    axios.get('/api/files')
      .then(resp => {
        this.setState({files: resp.data});
      })
      .catch();
  }

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

  render() {

    const rows = this.buildRows(this.state.files, 4);

    const transformedRows = rows.map(row => {
      return (
        <Row>
          {row.map(file => {
            return (
              <Column colType={'1-of-4'}>
                <File name={file.name} key={file.id} />
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
        <Row>
          <Column colType={'1-of-2'}>
            This is a 50% column
          </Column>
          <Column colType={'1-of-2'}>
            This is a 50% column
          </Column>
        </Row>
        <Row>
          <Column colType={'1-of-3'}>
            This is a 1/3 column
          </Column>
          <Column colType={'1-of-3'}>
            This is a 1/3 column
          </Column>
          <Column colType={'1-of-3'}>
            This is a 1/3 column
          </Column>
        </Row>
        <Row>
          <Column colType={'1-of-3'}>
            This is a 1/3 column
          </Column>
          <Column colType={'2-of-3'}>
            This is a 2/3 column
          </Column>
        </Row>
        <Row>
          <Column colType={'1-of-4'}>
            This is a 1/3 column
          </Column>
          <Column colType={'1-of-4'}>
            This is a 1/3 column
          </Column>
          <Column colType={'1-of-4'}>
            This is a 1/3 column
          </Column>
          <Column colType={'1-of-4'}>
            This is a 1/3 column
          </Column>
        </Row>
        <Row>
          <Column colType={'1-of-4'}>
            This is a 1/3 column
          </Column>
          <Column colType={'3-of-4'}>
            This is a 2/3 column
          </Column>
        </Row>
      </div>
    )
  }
};

export default Files;
