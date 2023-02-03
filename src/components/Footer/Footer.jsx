import img_1 from './footer_img_1.png';
import img_2 from './footer_img_2.png';
import img_3 from './footer_img_3.png';
import './footer_style.css';


function Rodape() {

  return (

    <footer className="footer_das_paginas">

      <a href="https://www.doacao.sosfauna.org.br/" target="_blank">
        <img className='footer_logo' src={img_1} />
      </a>

      <a href="https://www.facebook.com/groups/260694610639293/" target="_blank">
        <img className='footer_logo' src={img_2} />
      </a>

      <a href="https://instagram.com/patinhasdeamor.es/" target="_blank">
        <img className='footer_logo' src={img_3} />
      </a>

    </footer>

  );
}

export default Rodape;


