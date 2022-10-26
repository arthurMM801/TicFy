import './configs.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cabecalho from "../../components/Cabecalho/Cabecalho"


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