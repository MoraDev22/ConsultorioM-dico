import PacienteForm from "../components/PacienteForm";
import { Link } from "react-router-dom";

function Pacientes() {
  return (
    <div>

      <h2 className="mb-4 text-center">Listado De Pacientes</h2>
      <button className="btn btn-success" >
      <Link className="nav-link" to="/pacientes/agregar">
            Registrar Paciente
        </Link>
      </button>
      <hr />

      <table className="table table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>9811234567</td>

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

export default Pacientes;