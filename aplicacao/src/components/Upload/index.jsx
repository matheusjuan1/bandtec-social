import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './style'

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="sucess">Solte os arquivos aqui</UploadMessage>
  }

  render() {
    return (
      <Dropzone accept='image/*' onDropAccepted={() => {}}>
        {( {getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer 
            {... getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            >
              <input {...getInputProps()}/>
              {this.renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
        )}
      </Dropzone>
    )
  }
}