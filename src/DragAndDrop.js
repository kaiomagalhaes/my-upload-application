import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import './DragAndDrop.css';

const propTypes = {
  files: PropTypes.array,
  onChange: PropTypes.func,
}

const defaultProps = {
  files: [],
  onChange: files => files,
}

class DragAndDrop extends Component {
  onDrop(files) {
    this.props.onChange(files);
  }

  render() {
    const { files } = this.props;
    return (
      <div>
        <div>
          <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </div>
    );
  }
}

DragAndDrop.propTypes = propTypes;
DragAndDrop.defaultProps = defaultProps;

export default DragAndDrop;
