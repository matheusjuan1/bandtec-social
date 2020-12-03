import React from "react";
import { UserContext } from "../../UserContext";
import { PostDelete } from "./PostDelete";
import * as S from './style';
import { parseISO, format, } from 'date-fns';
import pt from 'date-fns/locale/pt';
import ImageModal from "../ImageModal/ImageModal";


export const Post = ({post}) => {
  const user = React.useContext(UserContext);
  const iso = parseISO(post.createdAt)
  const formatDate = format(iso, "dd 'de' MMMM', às ' HH:mm'h'", {locale: pt});
  const [imageModal, setImageModal] = React.useState(false);

  function imageClick() {
    setImageModal(true);
  }

  return (
      <S.Post>
        <S.ProfilePost>
          <a href={`/perfil/${post.usuario.id}`} className="group-post" >
            <img alt="" src={post.usuario.ftperfil}></img>
            <div className="profile-post-name">
              <h4>{post.usuario.name}</h4>
              <h5>{formatDate}</h5>
            </div>
          </a>
          {user.dados && user.dados.idUsuario === post.usuario.id && <PostDelete id={post.id}/>}
        </S.ProfilePost>
        <div className="conteudo">
          <p>{post.conteudo}</p>
          {post.image && (
            <>
            <S.PostImage onClick={imageClick}>
              <img alt="" src={post.imageUrl} />
            </S.PostImage>
            <ImageModal image={post.imageUrl} imageModal={imageModal} setImageModal={setImageModal}/>
            </>
          )}
        </div>
      </S.Post>
  );
};
