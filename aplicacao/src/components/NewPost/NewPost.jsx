import React from "react";
import { Button } from "../Form/Button/Button";
import {Error} from '../Helper/Error'
import Preview from "../Preview/Preview";
import Upload from "../Upload/Upload";
import * as S from "./style";

const NewPost = ({ post, setPost, dados, createPost, handleUpload, dataimg, setImg, loading, error}) => {
  const[imgUp, setImgUp] = React.useState(false);
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
            {imgUp && !dataimg && <Upload imgUp={imgUp} onUpload={handleUpload} />}
            {dataimg && <Preview dataimg={dataimg} setImg={setImg} />}
            {loading ? <Button disabled className="btnPub">Publicando...</Button>
            : <Button className="btnPub">Publicar</Button>}
          </form>
          <button className="btnImg" onClick={() => setImgUp(!imgUp)}><i className="fas fa-image"></i> Imagem</button>
          <Error error={error} />
        </div>
      </S.NewPost>
    );
}

export default NewPost;
