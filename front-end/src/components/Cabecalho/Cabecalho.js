import './cabecalho.css'
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

function Cabecalio(){
  return(
    <div className="wrapper">
      <SideBar />
      <div className="rigthSide">
        <Header />
      </div>
    </div>
  ); 
}

export default Cabecalio;