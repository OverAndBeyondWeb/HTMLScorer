import React, { Component } from 'react';

//styles
import './App.scss';

//modules

import styles from './Second.module.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.test}>App is running</div>
      </div>
    );
  }
}

export default App;
