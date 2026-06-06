function EditarPaciente() {
    return (
      <div>
  
        <h2 className="mb-4">
          Editar Paciente
        </h2>
  
        <form>
  
          <div className="mb-3">
            <label>Nombre</label>
  
            <input
              type="text"
              className="form-control"
              defaultValue="Juan Pérez"
            />
          </div>
  
          <div className="mb-3">
            <label>Teléfono</label>
  
            <input
              type="text"
              className="form-control"
              defaultValue="9811234567"
            />
          </div>
  
          <button className="btn btn-primary">
            Actualizar
          </button>
  
        </form>
  
      </div>
    );
  }
  
  export default EditarPaciente;