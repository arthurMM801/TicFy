import './header.css'
import 'bootstrap';

function Header() {

  return (
    <header className="conteiner">
      <nav className="navbar navbar-expand-lg blue">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
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
                <a className="nav-link" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Cadastre-se</a>
              </li>

              <li className="nav-item dropdown perfil">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  perfil
                </a>
                <ul className="dropdown-menu" id="alinhamento-menu">
                  <li><a className="dropdown-item" href="#">Minha conta</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Configurações</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Sair</a></li>
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