import React from "react";
import api from "../../services/api";
import { UserContext } from "../../UserContext";

import NewPost from "../../components/NewPost/NewPost";
import { Post } from "../../components/Post/Post";
import { useFetch } from "../../hooks/useFetch";
import Head from "../../components/Helper/Head";
import Loading from "../../components/Helper/Loading/Loading";

const Main = () => {
  const { dados } = React.useContext(UserContext);
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState("");
  const [img, setImg] = React.useState(null);
  const { loading, error, request } = useFetch();

  async function loadPosts() {
    const res = await api.get("/");
    setPosts(res.data);
  }

  React.useEffect(() => {
    loadPosts();
  }, []);

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
      if (post !== "") formData.append("conteudo", post);
      formData.append("fkUsuario", dados.idUsuario);
      formData.append("image", 1);
      const req = api.post("/", formData);
      await request(req);
      setImg(null);
      setPost("");
    } else {
      if (post !== "") {
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
      {dados && posts ? (
        <section className="container animeTop">
          <Head title="Home" />
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
          <hr></hr>
          <div style={{ margin: "1.5rem 0" }} className="animeTop">
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

export default Main;
