import React, { Component } from 'react';
import Upload from './containers/Upload/Upload';
import Files from './containers/Files/Files';
import Modal from './components/Modal/Modal';
import FileDetails from './containers/FileDetails/FileDetails';

//styles
import './SCSS/App.scss';

import axios from 'axios';

class App extends Component {
  
  state = {
    files: [],
    showModal: true
  }

  componentDidMount() {
    axios.get('/api/files')
      .then(resp => {
        this.setState({files: resp.data});
      })
      .catch();
  }

  closeModal= () => {
    this.setState({showModal: false})
  }

  render() {
    const modalEl = <Modal clicked={this.closeModal}><FileDetails/></Modal>
    const showModal = this.state.showModal ? modalEl : null;
    
    return (
      <div className="App">
        {showModal}
        <Upload files={this.state.files}/>
        <Files files={this.state.files}/>
      </div>
    );
  }
}

export default App;
