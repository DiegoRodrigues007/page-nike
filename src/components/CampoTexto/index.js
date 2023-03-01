
import '../CampoTexto/CampoTexto.css';

import Tenis from '../../img/tenis-branco.svg';

const CampoTexto = () => {
  return (
    <section className='page-home'>
      <div className='text'>
        <h1>Brand New Edition</h1>
        <p>
          WE VE SET BOLD AND AMBITIOUS TARGETS FOR 2025 AGAINST OUR FOCUS AREAS
          OS PEOPLE, PLANET AND PLAY. LEARN MORE ABOUT OUR JOURNEY TO A BETTER
          FUTURE
        </p>
        <a className='button'>Shop</a>
      </div>
      <div>
        <img className = 'img' src={Tenis}/>
      </div>
    </section>
  );
};

export default CampoTexto;
