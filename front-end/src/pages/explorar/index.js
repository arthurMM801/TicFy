import './explorar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://kit.fontawesome.com/119463e00c.js';
import Cabecalho from '../../components/Cabecalho/Cabecalho';


function Explorar() { 
  return (
    <div className="">
      <Cabecalho />
        <div className="explorar__content">
          <div className='player'>
            <img src='envolver.png' className='player__img' alt=""></img>
            <p className='player__titulo'>Titulo</p>
            <p className='player__descricao'>Descricao</p>
          </div>

          <div className='funcionalidades'>
            <div className='funcionalidades__perfil'>
              <img src="perfil.png" className='funcinalidades__perfil-img' alt=""></img>
              <div >
                <label className='funcinalidades__perfil-ciador'>Anita</label><br/>
                <label className='funcinalidades__perfil-descricao'>Single by Anita - 2021</label>
              </div>
              
            </div>
            <hr/>
            <div className='funcionalidades__interacoes'>
              <img src='zoom-in.png'></img>
              <img src='suit-heart.png'></img>

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