import './configs.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from "../../components/SideBar/SideBar"
import Header from "../../components/Header/Header"
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ListaDeMusica from '../../components/ListaDeMusicas/ListaDeMusica'


function Configs() {
  return (
    <div>
      <Cabecalho />
      <div className='configurações'>
        <h2>Configurações</h2>
        <div className='input-idioma'>
          <form>
            <label for="idioma">idioma: </label>
            <select id="idioma">
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Configs;