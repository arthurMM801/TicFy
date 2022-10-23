import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from "../../components/SideBar/SideBar"
import Header from "../../components/Header/Header"
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import ListaDeMusica from '../../components/ListaDeMusicas/ListaDeMusica'


function Home() {
  return (
    <div>
      <Cabecalho />
      <div className="home__content">
        <ListaDeMusica />
        <ListaDeMusica />
      </div>
    </div>
  );
}


export default Home;