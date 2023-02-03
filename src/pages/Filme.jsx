import seek from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import styles from './Filme.module.css'
import {Link} from "react-router-dom"

const Filme = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await seek.get(`/filmes/${id}`);
      const data = response.data;
      setPost(data);
      
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getPost();
  }, []);


  return (
    <div className="bloco_filme_detalhe">
      <br></br>
      
      {!post.nome ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.movie}>
          <img src={post.imagem} alt={post.nome} className={styles.img}/>
          <h2 className={styles.name}>{post.nome}</h2>
          <h3 className={styles.genre}>Gênero: {post.genero}</h3>
          <hr />
          <p><b>Direcao:</b> {post.direcao}</p>
          <p><b>Pais:</b> {post.pais}</p>
          <p><b>Distribuição:</b> {post.distribuicao_producao}</p>
          <p><b>Ano de Lançamento:</b> {post.ano_de_lancamento}</p>
          <p><b>Duração do filme:</b> {post.duracao_do_filme}</p>
          <hr />
          <h4>Sinopse: {post.sinopse}</h4>
          <Link to={`/editar_filme/${post.id}`}>  
            <button className={styles.edit}>Editar</button>
          </Link>  
          <Link to={'/todos_os_filmes'}>
          <input type="submit" className={styles.back} value="Voltar"/>
          </Link>
          
        </div>
      )}
      <br></br>
    </div>
  );
};

export default Filme;