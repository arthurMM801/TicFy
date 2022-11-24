import './playlist.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from "../../components/SideBar/SideBar"
import Header from "../../components/Header/Header"
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ListaDeMusica from '../../components/ListaDeMusicas/ListaDeMusica'
import Envolver from '../../assets/envolver.png'
import Clock from '../../assets/clock.svg'
import Play from '../../assets/play.png'
import Heart from '../../assets/suit-heart.png'
import Mais from '../../assets/add.png'
import { Link } from 'react-router-dom';


function Playlist() {
  return (
    <div>
      <Cabecalho />
      <div className='home__content'>
        <div className='playlist_wrapper'>
          <div className='playlist_img'>
            <img src={Envolver}></img>
          </div>
          <div className='playlist_info'>
            <div className='playlist_info2'>
              <span>Playlist</span>
              <h1>Anitta de cria</h1>
            </div>
            <span>Rogério mendes-9 curtidas-15 músicas</span>
          </div>
        </div>
        <div className='lista_musicas'>
          <ol>
            <li>
              <div className='playlist_icons'>
                <Link to={'/player'}>
                  <img src={Play} className='icon'></img>
                </Link>
                <button className='icone'>
                  <img src={Heart} className='icon'></img>
                </button>
                <button className='icone'>
                  <img src={Mais} className='icon'></img>
                </button>
              </div>
              <span>Álbum</span>
              <img src={Clock} className='icon'></img>
            </li>
            <hr/>
            <li>
              <div className='musica_info'>
                <img src={Envolver}></img>
                <Link to={'/player'}>Envolver</Link>
              </div>
              <span>Anitta</span>
              <span>3:15</span>
            </li>
            <li>
              <div className='musica_info'>
                <img src={Envolver}></img>
                <Link to={'/player'}>Envolver</Link>
              </div>
              <span>Anitta</span>
              <span>3:15</span>
            </li>
            <li>
              <div className='musica_info'>
                <img src={Envolver}></img>
                <Link to={'/player'}>Envolver</Link>
              </div>
              <span>Anitta</span>
              <span>3:15</span>
            </li>
            <li>
              <div className='musica_info'>
                <img src={Envolver}></img>
                <Link to={'/player'}>Envolver</Link>
              </div>
              <span>Anitta</span>
              <span>3:15</span>
            </li>
            <li>
              <div className='musica_info'>
                <img src={Envolver}></img>
                <Link to={'/player'}>Envolver</Link>
              </div>
              <span>Anitta</span>
              <span>3:15</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}


export default Playlist;