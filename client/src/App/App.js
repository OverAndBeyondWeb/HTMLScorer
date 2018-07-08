import React, { Component } from 'react';
import Upload from './containers/Upload/Upload';
import Files from './containers/Files/Files';

//styles
import './SCSS/App.scss';

import axios from 'axios';

class App extends Component {
  
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

  render() {
    return (
      <div className="App">
        <Upload files={this.state.files}/>
        <Files files={this.state.files}/>
      </div>
    );
  }
}

export default App;
