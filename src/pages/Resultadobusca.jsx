import seek from "../axios/config";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Catalogo.module.css"


const Catalogo = () => {
  const [posts, setPosts] = useState([]);
  const { busca } = useParams();
  
  const getPosts = async () => {
    try {
      const response = await seek.get(`/filmes?nome=${busca}`);

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <div>

      <h1 className={styles.titleH1}>Todos os filmes</h1>
      <div className={styles.catalog}>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className={styles.item} key={post.id}>
            <Link to={`/todos_os_filmes/${post.id}`}>
              <img src={post.imagem} alt={post.nome} className={styles.imgItem}/>
              <h2 className={styles.titleH2}>{post.nome}</h2>
            </Link>
              <p className={styles.genre}>{post.genero}</p>
              <p className={styles.synopsis}>{post.sinopse}</p>
            <Link to={`/editar_filme/${post.id}`}>  
              <button className={styles.edit}>Editar</button>
            </Link>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Catalogo;