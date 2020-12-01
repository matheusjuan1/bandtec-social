import React from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/Helper/Head";
import user from "../../services/apiUser";
import api from "../../services/api";
import { Post } from "../../components/Post/Post";
import * as S from './style';
import { Button } from "../../components/Form/Button/Button";

export const UserProfile = () => {
  const { id } = useParams();
  const { dados } = React.useState({});
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await api.post(`/${id}`);
      setPosts(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="container">
        <Head title="Perfil" />
        <S.Perfil>
            <img alt="" src={dados.ftperfil} />
            <h1>{dados.name}</h1>
            <S.Infos>
              <h3>
                <i className="fas fa-at"></i> {dados.email}
              </h3>
              <h3>
                <i className="fas fa-mobile-alt"></i> {dados.celular}
              </h3>
              <h3>
                <i className="far fa-building"></i> {dados.cargo}
              </h3>
              <h3>
                {/* <i className="fas fa-calendar-alt"></i> {format(parseISO(dados.dataNasc), "dd 'de' MMMM' de ' yyyy", {locale: pt})} */}
              </h3>
            </S.Infos>
            <S.DivButton>
              <Button>Editar Perfil</Button>
            </S.DivButton>
          </S.Perfil>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default UserProfile;
