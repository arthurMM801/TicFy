import './header.css'
import 'bootstrap';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="conteiner fixed">
      <nav className="navbar navbar-expand-lg blue">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2 header__pesquisar" type="search" placeholder="Pesquisar" aria-label="Search" />
            <button className="btn bntStyle pesquisar__button" type="submit">Pesquisar</button>
          </form>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Planos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Baixar</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to ='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to ='/cadastro'>Cadastre-se</Link>
              </li>

              <li className="nav-item dropdown perfil">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  perfil
                </a>
                <ul className="dropdown-menu" id="alinhamento-menu">
                  <li><Link className="dropdown-item" to ='/perfil'>Minha conta</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" to ='/configs'>Configurações</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" to ='/login'>Sair</Link></li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
