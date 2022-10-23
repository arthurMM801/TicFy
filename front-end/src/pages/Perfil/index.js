import './perfil.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ListaDeMusica from '../../components/ListaDeMusicas/ListaDeMusica'
import Card from '../../components/Card/Card';



function Perfil() {
  return (
    <div>
      <Cabecalho />
      <div class="center">

      <div className='perfil'>
        <div className='perfil-wrapper'>
        <img src="image.png" className="perfil__image" ></img>
        <button type="submit" className="edit_btn">
        Editar perfil
        </button>
        </div>
        <h1 className='nome'>Rogério mendes</h1>
      </div>

      <hr></hr>

      <div className='div-perfil'>
      <h3>Curtidos</h3>
      <ul className="list-group-horizontal perfil-curtidas">
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                
            </ul >
      </div>
      </div>
    </div>
    
  );
}


export default Perfil;