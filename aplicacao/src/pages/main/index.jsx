import React from "react";
import api from "../../services/api";
import { UserContext } from "../../UserContext";


import NewPost from "../../components/NewPost/NewPost";
import { Post } from "../../components/Post/Post";
import {useFetch} from "../../hooks/useFetch";

const Main = () => {
  const { dados } = React.useContext(UserContext);
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState("");
  const [img, setImg] = React.useState(null);
  const {loading, error, request} = useFetch();

  async function loadPosts() {
    const res = await api.get("/");
    setPosts(res.data);
  }

  React.useEffect(() => {
    loadPosts();
  }, []);

  function handleUpload(files) {
    console.log(files[0])
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
        const response = await request(req);
        console.log(response);
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
    <div className="container">
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
      <div style={{margin: '1.5rem 0'}} className="animeTop">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Main;
