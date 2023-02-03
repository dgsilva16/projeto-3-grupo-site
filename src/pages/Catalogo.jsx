import seek from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Catalogo.module.css"


const Catalogo = () => {


  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await seek.get("/filmes");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postDelete = async (id) => {
    await seek.delete(`/filmes/${id}`)
      .then(res => console.log('Deletado com Sucesso', res))
      .catch(err => console.log(err))
    setPosts(posts.filter(post => post.id !== id))
  };

  useEffect(() => {
    getPosts();

  }, []);

  return (
    <div>


      <div className={styles.catalog}>
        {posts.length === 0 ? (
          <p>Carregando Filmes</p>
        ) : (

          posts.map((post) => (

            <div className={styles.item} key={post.id}>
              <Link to={`/todos_os_filmes/${post.id}`}>
                <img src={post.imagem} alt={post.nome} className={styles.imgItem} />
                <h2 className={styles.titleH2}>{post.nome}</h2>
              </Link>
          
              <div>
              <button onClick={() => postDelete(post.id)} className={styles.delete}>Deletar</button>
              <br></br>
              <br></br>
              </div>

            </div>

          ))
        )}
      </div>
    </div>
  );
};

export default Catalogo;