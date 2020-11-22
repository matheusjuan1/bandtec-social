import React from "react";
import * as S from './style';

export const Post = ({post}) => {
  return (
      <S.Post>
        <S.ProfilePost>
          <img alt="" src={post.usuario.ftperfil}></img>
          <div className="profile-post-name">
            <h4>{post.usuario.name}</h4>
            <h5>{post.createdAt}</h5>
          </div>
        </S.ProfilePost>
        <div className="conteudo">
          <p>{post.conteudo}</p>
          {post.image && (
            <S.PostImage>
              <img alt="" src={post.imageUrl} />
            </S.PostImage>
          )}
        </div>
      </S.Post>
  );
};
