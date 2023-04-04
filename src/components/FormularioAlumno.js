import React from "react";


const FormularioAlumno = () => {
    return(
    <div className='col-md-6 p-3 col-sm-12 bg-dark text-white rounded-3 shadow'>
        <div className='d-flex justify-content-center m-2'>
            <h3>Formulario</h3>
        </div>
        <div class="col mb-3">
            <label for="formGroupExampleInput" class="form-label mx-2 w-25">Nombre</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="indique nombre" />
        </div>
        <div className="col mb-3">
            <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Apellido</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="indique apellido" />
        </div>
        <div className="col mb-3">
            <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Equipo</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="numero de equipo" />
        </div>
        <div className='col-12'>
            <button type="button" className="btn btn-outline-info d-flex justify-content-center w-100">Guardar</button>
        </div>
    </div>
    )
}

export {FormularioAlumno};