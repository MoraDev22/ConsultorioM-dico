function eliminarPaciente() {

    const confirmar = window.confirm(
      "¿Desea marcar la cita como Atendido?"
    );
  
    if (confirmar) {
      alert("Paciente Atendido:DD");
    }
  }
function Home() {
    return (
      <>

        <h2 className="fw-bold text-center mb-4 tracking-wide" style={{ letterSpacing: '0.5px' }}>Listado de Citas</h2>
  
        <table className="table table-striped table-bordered border-2 text-center">
  <thead>
    <tr>
      <th>Paciente</th>
      <th>Médico</th>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mora</td>
      <td>Claudia</td>
      <td>2026-06-02</td>
      <td>12:32:00</td>
      <td>Atendido</td>
    </tr>
    <tr>
      <td>Mora</td>
      <td>Claudia</td>
      <td>2026-06-02</td>
      <td>12:32:00</td>
      <td>Atendido</td>
    </tr>
    <tr>
      <td>Mora</td>
      <td>Claudia</td>
      <td>2026-06-02</td>
      <td>12:32:00</td>
      <td className="d-flex align-items-center justify-content-center gap-3">
  <span>Programado</span>
  
  <button className="btn btn-sm btn-success">
  <i className="bi bi-pencil-square" 
    onClick={eliminarPaciente}></i>
  </button>


</td>

    </tr>
  </tbody>
</table>

  
      </>
    );
  }
  
  export default Home;