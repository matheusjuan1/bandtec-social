import React from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/Helper/Head";
import user from "../../services/apiUser";
import api from "../../services/api";
import { Post } from "../../components/Post/Post";
import * as S from "./style";
import { Button } from "../../components/Form/Button/Button";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt";
import Loading from "../../components/Helper/Loading/Loading";
import ImageModal from "../../components/ImageModal/ImageModal";

export const UserProfile = () => {
  const { id } = useParams();
  const [dadosUser, setDadosUser] = React.useState(null);
  const [posts, setPosts] = React.useState(null);
  const [imageModal, setImageModal] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const response = await api.post(`/${id}`);
      setPosts(response.data);
      const res = await user.get(`/${id}`);
      if(res.status === 200) setDadosUser(res.data);
    }
    fetchData();
  }, [id]);

  function imageClick() {
    setImageModal(true);
  }

  return (
    <>
      {dadosUser && posts ? (
        <section className="container animeTop">
          <Head title={dadosUser.name} />
          <S.Perfil>
            <img onClick={imageClick} alt="" src={dadosUser.ftperfil} />
            <ImageModal image={dadosUser.ftperfil} imageModal={imageModal} setImageModal={setImageModal}/>
            <S.Infos className="infos">
            <h1>{dadosUser.name}</h1>
              <h3>
                <i className="fas fa-at"></i> {dadosUser.email}
              </h3>
              <h3>
                <i className="fas fa-mobile-alt"></i> {dadosUser.celular}
              </h3>
              <h3>
                <i className="far fa-building"></i> {dadosUser.cargo}
              </h3>
              <h3>
                <i className="fas fa-calendar-alt"></i>{" "}
                {format(
                  parseISO(dadosUser.dataNasc),
                  "dd 'de' MMMM' de ' yyyy",
                  { locale: pt }
                )}
              </h3>
            </S.Infos>
            <S.DivButton className="divButton">
              <Button>Curtir</Button>
            </S.DivButton>
          </S.Perfil>
          <div>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserProfile;
