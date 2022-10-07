import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Index';


function Home() { 
  return (
    <div className="wrapper">
      <SideBar />
      <div id="content">
        <Header />
        <Card />
      </div>
    </div>
  );
}

export default Home;