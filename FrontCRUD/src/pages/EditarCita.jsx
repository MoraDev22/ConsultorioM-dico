function EditarCita() {
    return (
      <div>
  
        <h2 className="mb-4">
          Editar Cita
        </h2>
  
        <form>
  
          <div className="mb-3">
            <label>Paciente</label>
  
            <select className="form-select">
              <option>Juan Pérez</option>
            </select>
          </div>
  
          <div className="mb-3">
            <label>Médico</label>
  
            <select className="form-select">
              <option>Dra. López</option>
            </select>
          </div>
  
          <div className="mb-3">
            <label>Fecha</label>
  
            <input
              type="date"
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label>Hora</label>
  
            <input
              type="time"
              className="form-control"
            />
          </div>
  
          <button className="btn btn-primary">
            Actualizar
          </button>
  
        </form>
  
      </div>
    );
  }
  
  export default EditarCita;