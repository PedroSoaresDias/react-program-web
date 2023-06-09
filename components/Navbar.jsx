export default function Navbar() {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg navbar-dark bg-dark list p-3">
        <div className="container-fluid">
            <div className="logo">
                <h1>Titanic</h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
                    <li className="nav-item">
                        <a className="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#imagens">Imagens</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
