import './player.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Envolver from '../../assets/envolver.png'
import Perfil from '../../assets/perfil.png'
import Heart from '../../assets/suit-heart.png'
import Play from '../../assets/play.png'


function Player() {
  return (
    <div>
      <Cabecalho />
      <div className='player__content'>
        <div className='conteiner__player'>
          <div className='player__capa'>
            <img src={Envolver } className='player__imagem' alt='' ></img>
            <div className='player__perfil'>
              <div className='player__perfil-content'>
                <img src={Perfil } className='player__perfil-img' alt=""></img>
                <div className='player__perfil-detalhes'>
                  <label className='player__perfil-ciador'>Anita</label><br />
                  <label className='player__perfil-descricao'>Single by Anita - 2021</label>
                </div>
                <img src={Heart} alt='' className='player__like'></img>
              </div>
              <hr />
            </div>
          </div>
          
          <p className='player__titulo'>Envolver</p>

          <div className='player__controle'>
            <img src={Play} alt='Botão de play' className='player__play'></img>
            <progress className="player__progress" max="100" value="10"> 70% </progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;