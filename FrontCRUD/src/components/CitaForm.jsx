function CitaForm() {
    return (
        <form className="p-4 border border-secondary rounded shadow">
        <div className="w-100 mb-4 p-3 bg-primary rounded border border-secondary-subtle">
        <h2 className="fw-bold text-center text-white mb-4 tracking-wide" style={{ letterSpacing: '0.5px', textShadow: '1px 1px 0 #000'  }}>Registrar Cita</h2>
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
        <div className="col-md-2">
          <label className="form-label">ID Paciente:</label>
          <input
            type="number"
            className="form-control "
            style={{ width: "100px" }}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">ID Medico:</label>
          <input
            type="number"
            className="form-control "
            style={{ width: "100px" }}
          />
        </div>
        
      </div>

      <div className="mb-3">
        <label className="form-label">Motivo:</label>

        <textarea className="form-control" placeholder="Escriba aquí el motivo de la cita..."></textarea>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary">
          Guardar Médico
        </button>
      </div>
      </form>
    );
  }
  
  export default CitaForm;