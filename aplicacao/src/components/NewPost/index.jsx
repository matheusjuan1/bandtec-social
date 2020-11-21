import React from "react";
import { Button } from "../Form/Button/Button";
// import Upload from "../Upload";
import * as S from "./style";

const NewPost = ({ post, setPost, dados, createPost }) => {

  function handleChange(event) {
    setPost(event.target.value)
  }


    return (
      <S.NewPost>
        <div>
          <h4>{dados && dados.name}</h4>
          <form onSubmit={createPost}>
            <textarea
              placeholder="No que você está pensando?"
              onChange={handleChange}
              value={post}
            ></textarea>
            {/* <Upload onUpload={this.handleUpload} /> */}
            {/* <FileList /> */}
            <Button>Criar Post</Button>
          </form>
        </div>
      </S.NewPost>
    );
}

export default NewPost;
