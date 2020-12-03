import React from "react";
import { Button } from "../../components/Form/Button/Button";
import Loading from "../../components/Helper/Loading/Loading";
import NewPost from "../../components/NewPost/NewPost";
import { Post } from "../../components/Post/Post";
import api from "../../services/api";
import { UserContext } from "../../UserContext";
import * as S from "./style";
import Head from "../../components/Helper/Head";
import useFetch from '../../hooks/useFetch';
import { parseISO, format, } from 'date-fns';
import pt from 'date-fns/locale/pt';
import ImageModal from "../../components/ImageModal/ImageModal";

const Profile = () => {
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState("");
  const [img, setImg] = React.useState(null);
  const {loading, error, request} = useFetch();
  const { dados } = React.useContext(UserContext);
  const [imageModal, setImageModal] = React.useState(false);
  

  React.useEffect(() => {
    if (dados) {
      async function fetchData() {
        const response = await api.post(`/${dados.idUsuario}`);
        setPosts(response.data);
      }
      fetchData()
    }
  }, [dados]);

  async function loadPosts() {
    const response = await api.post(`/${dados.idUsuario}`);
    setPosts(response.data);
  }

  function imageClick() {
    setImageModal(true);
  }
  
  function handleUpload(files) {
    setImg({
      preview: URL.createObjectURL(files[0]),
      raw: files[0]
    });
  }

  async function createPost(event) {
    event.preventDefault();
      if (img) {
        const formData = new FormData();
        formData.append("file", img.raw);
        if(post !== "") formData.append("conteudo", post);
        formData.append("fkUsuario", dados.idUsuario);
        formData.append("image", 1);
        const req = api.post("/", formData);
        await request(req);
        setImg(null);
        setPost("");
      } else {
        if(post !== "") {
          await api.post("/", {
          conteudo: post,
          fkUsuario: dados.idUsuario,
          });
          setPost("");
        }
      }
      loadPosts();
  }
  

  return (
    <>
      {dados ? (
        <section className="container animeTop">
          <Head title={dados.name} />
          <S.Perfil>
            <img onClick={imageClick} alt="" src={dados.ftperfil} />
            <ImageModal image={dados.ftperfil} imageModal={imageModal} setImageModal={setImageModal}/>
            <S.Infos className="infos">
            <h1>{dados.name}</h1>
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
                <i className="fas fa-calendar-alt"></i> {format(parseISO(dados.dataNasc), "dd 'de' MMMM' de ' yyyy", {locale: pt})}
              </h3>
            </S.Infos>
            <S.DivButton className="divButton">
              <Button>Editar Perfil</Button>
            </S.DivButton>
          </S.Perfil>

          <NewPost 
            setPost={setPost}
            post={post}
            dados={dados}
            createPost={createPost}
            handleUpload={handleUpload}
            dataimg={img}
            setImg={setImg}
            loading={loading}
            error={error}
          />
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

export default Profile;
