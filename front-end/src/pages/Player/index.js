import './player.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Envolver from '../../assets/envolver.png'
import Perfil from '../../assets/perfil.png'
import Heart from '../../assets/suit-heart.png'
import Play from '../../assets/play.png'
import Voltar from '../../assets/voltar.png'
import Passar from '../../assets/passar.png'


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
                <button className='curtir icone'>
                  <img src={Heart} alt='' className='player__like'></img>
                </button>
              </div>
              <hr />
            </div>
          </div>
          
          <p className='player__titulo'>Envolver</p>

          <div className='player__controle'>
            <button className='icone'>
              <img src={Play} alt='Botão de play' className='player__play'></img>
            </button>

            <progress className="player__progress" max="100" value="10"> 70% </progress>

            <button className='icone'>
              <img src={Voltar} alt='Botão de play' className='player__play'></img>
            </button>
            <button className='icone passar'>
              <img src={Passar} alt='Botão de play' className='player__play'></img>
            </button>

            <button className='icone icone__playlist'>
              <i className="fa-solid fa-folder-minus"></i>
            </button>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;