import './player.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho';


function Player() {
  return (
    <div>
      <Cabecalho />
      <div className='player__content'>
        <div className='conteiner__player'>
          <div className='player__capa'>
            <img src='envolver.png' className='player__imagem' alt='' ></img>
            <div className='player__perfil'>
              <div className='player__perfil-content'>
                <img src="perfil.png" className='player__perfil-img' alt=""></img>
                <div className='player__perfil-detalhes'>
                  <label className='player__perfil-ciador'>Anita</label><br />
                  <label className='player__perfil-descricao'>Single by Anita - 2021</label>
                </div>
                <img src='suit-heart.png' alt='' className='player__like'></img>
              </div>
              <hr />
            </div>
          </div>
          
          <p className='player__titulo'>Envolver</p>

          <div className='player__controle'>
            <img src='play.png' alt='Botão de play' className='player__play'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;