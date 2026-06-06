function EditarMedico() {
    return (
      <div>
  
        <h2 className="mb-4">
          Editar Médico
        </h2>
  
        <form>
  
          <div className="mb-3">
            <label>Nombre</label>
  
            <input
              type="text"
              className="form-control"
              defaultValue="Dra. López"
            />
          </div>
  
          <div className="mb-3">
            <label>Especialidad</label>
  
            <input
              type="text"
              className="form-control"
              defaultValue="Pediatría"
            />
          </div>
  
          <button className="btn btn-primary">
            Actualizar
          </button>
  
        </form>
  
      </div>
    );
  }
  
  export default EditarMedico;