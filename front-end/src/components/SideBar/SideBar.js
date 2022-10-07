import './sideBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://kit.fontawesome.com/119463e00c.js';

function SideBar() {

    return (
        <nav className="sidebar blue">
            <div className="sidebar-header">
                <img src="Ceará-sc-logo-escudo-3.png" className="logo" alt="Logo do site TicFy"></img>
                <h3>TicFy</h3>
            </div>

            <ul className="components list-unstyled">
                <li className="active nav__item">
                    <a href="#homeSubmenu" className="">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#">
                        Pesquisar
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#">
                        Explorar
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#">Minhas Musicas</a>
                </li>
                <li className="nav__item">
                    <a href="#">Curtidas</a>
                </li>
            </ul>

        </nav>
    )
}

export default SideBar;