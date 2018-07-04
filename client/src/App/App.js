import React, { Component } from 'react';
import Upload from './containers/Upload/Upload';
import Files from './containers/Files/Files';

//styles
import './SCSS/App.scss';

//modules
import styles from './SCSS/App.module.scss';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Upload/>
        <Files/>
      </div>
    );
  }
}

export default App;
