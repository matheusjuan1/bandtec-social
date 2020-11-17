import React, { Component } from "react";
import Upload from "../Upload";
import * as S from "./style";

const NewPost = ({ setConteudo }) => {

  function handleChange(event) {
    setConteudo({conteudo: event.target.value})
  }


    return (
      <div  className="newPost">
        <div>
          <h6>Matheus Juan</h6>
          <form>
            <label for=""></label>
            <textarea
              placeholder="No que você está pensando?"
              onChange={handleChange}
              // value={this.state.lconteudo}
            ></textarea>
            {/* <Upload onUpload={this.handleUpload} /> */}
            {/* <FileList /> */}
          </form>
          <button onClick={() => {}}>Criar Post</button>
        </div>
      </div>
    );
}

export default NewPost;
