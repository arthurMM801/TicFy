import './explorar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://kit.fontawesome.com/119463e00c.js';
import Cabecalho from '../../components/Cabecalho/Cabecalho';

import Envolver from '../../assets/envolver.png'
import Perfil from '../../assets/perfil.png'
import Add from '../../assets/add.png'
import Heart from '../../assets/suit-heart.png'


function Explorar() { 
  return (
    <div className="">
      <Cabecalho />
        <div className="explorar__content">
          <div className='explorar'>
            <img src={Envolver} className='explorar__img' alt=""></img>
            <p className='explorar__titulo'>Titulo</p>
            <p className='explorar__descricao'>Descricao</p>
          </div>

          <div className='funcionalidades'>
            <div className='funcionalidades__perfil'>
              <img src={Perfil} className='funcinalidades__perfil-img' alt=""></img>
              <div >
                <label className='funcinalidades__perfil-ciador'>Anita</label><br/>
                <label className='funcinalidades__perfil-descricao'>Single by Anita - 2021</label>
              </div>
              
            </div>
            <hr/>
            <div className='funcionalidades__interacoes'>
              <button className='funcionalidades__button'> <img src={Add}></img> </button>
              <button className='funcionalidades__button'> <img src={Heart}></img> </button> 

            </div>

            <div className='funcionalidades__comentarios'>
              <div className='funcionalidades__comentarios-area'>
            
              </div>
              <div className='funcionalidades__comentarios-escrever'>
                <input id='comentarios' type={"text"} placeholder="Escreva seu comentario"></input>
                <button id='enviar' value="Enviar">Enviar</button>
              </div>
            </div>  
          </div>
      </div>
    </div>
  );
}

export default Explorar;