function PacienteForm() {
  return (
    <form className="p-4 border border-secondary rounded shadow">
      <div className="w-100 mb-4 p-3 bg-primary rounded border border-secondary-subtle">
        <h2 className="fw-bold text-center text-white mb-4 tracking-wide" style={{ letterSpacing: '0.5px', textShadow: '1px 1px 0 #000'  }}>Registrar Paciente</h2>
        </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>

        <input type="text" className="form-control" />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Apellido Paterno:</label>

        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Apellido Materno:</label>

        <input type="text" className="form-control" />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-2">
          <label className="form-label">Fecha Nacimiento:</label>
          <input
            type="date"
            className="form-control "
            style={{ width: "140px" }}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Curp:</label>
          <input
            type="text"
            className="form-control "
            style={{ width: "240px" }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Sexo:</label>
          <select className="form-select" style={{ width: "140px" }}>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Teléfono:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "160px" }}
          />
        </div>
      </div>


      <div className="mb-3">
        <label className="form-label">Correo:</label>

        <input type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Dirección:</label>

        <input type="text" className="form-control" />
      </div>


      <div className="row g-3 mb-3">
       
        <div className="col-md-2">
          <label className="form-label">Estatura:</label>
          <input
            type="text"
            className="form-control "
            style={{ width: "80px" }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Peso:</label>
          <input
            type="text"
            className="form-control "
            style={{ width: "80px" }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Tipo De Sangre:</label>
          <select className="form-select" style={{ width: "140px" }}>
            <option>A+</option>
            <option>O+</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Teléfono Emergencia:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "160px" }}
          />
        </div>
       
      </div>

      <div className="mb-3">
        <label className="form-label">Alergias:</label>

       <textarea className="form-control" placeholder="Escribe aquí las alergias que presenta el paciente..."></textarea>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary">
          Guardar Paciente
        </button>
      </div>
    </form>
  );
}

export default PacienteForm;
