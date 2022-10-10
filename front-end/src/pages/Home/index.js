import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import ListaDeMusica from '../../components/ListaDeMusicas/ListaDeMusica'


function Home() { 
  return (
    <div className="wrapper">
      <SideBar />
      <div id="rigthSide">
        <Header />
        <div className="content">
          <ListaDeMusica />
        </div>
        
      </div>
    </div>
  );
}

export default Home;