import React, { Component } from 'react';
import styles from './Files.module.scss';

import Row from '../../components/Grid/Row/Row';
import Column from '../../components/Grid/Column/Column';

class Files extends Component {
  render() {
    return (
      <div className={styles.Files}>
        This is the Files component
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
