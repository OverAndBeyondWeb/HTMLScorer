import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
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
    showModal: false,
    activeFile: null
  }

  componentDidMount() {
    axios.get('/api/files')
      .then(resp => {
        this.setState({files: resp.data});
      })
      .catch();
  }

  closeModal = () => {
    this.setState({showModal: false, activeFile: null})
    window.history.pushState(null, null, '/');
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  showFileDetails = (fileId, filename) => {
    this.setState({activeFile: {fileId, filename}});
    window.history.pushState(null, null, '/file-detail/file-' + fileId);
    this.openModal();
  }

  render() {
    const modalEl = (<Modal clicked={this.closeModal}>
                        <FileDetails 
                          activeFile={this.state.activeFile}
                          filenamesAndIds={this.state.files.map(file => {
                            return {fileId: file.id, filename: file.name};
                          })}
                        />
                    </Modal>);
    const showModal = this.state.showModal ? modalEl : null;
    return (
      <Router>
        <div className="App">
          {showModal}
          <Upload 
            files={this.state.files}
            showFileDetails={this.showFileDetails}
          />
          <Files
            files={this.state.files}
            showFileDetails={this.showFileDetails}
          />
        </div>
      </Router>
    );
  }
}

export default App;
