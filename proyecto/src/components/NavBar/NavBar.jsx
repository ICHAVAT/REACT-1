import CardWidget from "./CardWidget/CardWidget";
import Carrito from "./CardWidget/CardWidget";
import Categorias from "./categorias/categorias";
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="." ><img src="./css/icono.jfif" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">TECHNOVAL</a></li>
              <li className="nav-item"><a className="nav-link " href="#!">Nosotros</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                <Categorias/>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark toggles mx-3" type="button" >
                <div className="contenedor"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path id="icono" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg> </div> {/*boton carrito*/}
              </button>
              <CardWidget/>
            </form>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default NavBar;
