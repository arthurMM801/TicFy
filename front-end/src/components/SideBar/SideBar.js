import './sideBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://kit.fontawesome.com/119463e00c.js';

function SideBar() {

    return (
        <nav className="sidebar blue">
            <div className="sidebar-header">
                <img src="logo192.png" className="logo" alt="Logo do site TicFy"></img>
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
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Pesquisar
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#">
                        <i className="fa-brands fa-wpexplorer"></i>
                        Explorar
                    </a>
                </li>
                <li className="nav__item">
                    <i className="fa-solid fa-book"></i>
                    <a href="#">Minhas Musicas</a>
                </li>
                <li className="nav__item">
                    <i className="fa-solid fa-heart"></i>
                    <a href="#">Curtidas</a>
                </li>
            </ul>

        </nav>
    )
}

export default SideBar;