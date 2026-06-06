import MedicoForm from "../components/MedicoForm";
import { Link } from "react-router-dom";
function Medicos() {
  return (
    <div>

    <h2 className="mb-4 text-center">Listado De Pacientes</h2>
      <button className="btn btn-success" >
      <Link className="nav-link" to="/medicos/agregar">
            Registrar Médico
        </Link>
      </button>
      <hr />

      <table className="table table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dra. López</td>
            <td>Pediatría</td>

            <td>
              <button className="btn btn-warning btn-sm me-2">
                Editar
              </button>

              <button className="btn btn-danger btn-sm">
                Eliminar
              </button>
            </td>

          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Medicos;