import './sideBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://kit.fontawesome.com/119463e00c.js';
import { Link } from 'react-router-dom';

function SideBar() {

    return (
        <nav className="sidebar blue">
            <div className="sidebar-header">
                <img src="logo192.png" className="logo" alt="Logo do site TicFy"></img>
                <h3>TicFy</h3>
            </div>

            <ul className="components list-unstyled">
                <li className="active nav__item">
                    <Link to = '/' className="">
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span>Pesquisar</span>
                    </a>
                </li>
                <li className="nav__item">
                    <Link to = '/explorar'>
                        <i className="fa-brands fa-wpexplorer"></i>
                        <span>Explorar</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <a href="#">
                        <i className="fa-solid fa-book"></i>
                        <span>Minhas Musicas</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#">
                        <i className="fa-solid fa-heart"></i>
                        <span>Curtidas</span>
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default SideBar;