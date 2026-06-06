import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Consultorio
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Citas
          </Link>

          <Link className="nav-link" to="/pacientes">
            Pacientes
          </Link>

          <Link className="nav-link" to="/medicos">
            Médicos
          </Link>

          <Link className="nav-link" to="/citas/nueva">
            Nueva Cita
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;