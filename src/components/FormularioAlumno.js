import React from "react";
import { useState, useEffect } from "react";

const estudianteInit ={
    "estudiante_id":0,
    "nombre":"",
    "apellido":"",
    "equipo_id":0,
}


const FormularioAlumno = ({agregarEstudiante}) => {

    const [estudiante, setEstudiante] = useState(estudianteInit);
    const {estudiante_id, nombre, apellido, equipo_id} = estudiante;

    const handleInputChange = (e) => {
        console.log(e);
        const handleFormValue = {
            ...estudiante,
            [e.target.name]: e.target.value,
        }
        console.log(estudiante)
        setEstudiante(handleFormValue)
        console.log(estudiante)

    }

    return(
    <div className='col-md-6 p-3 col-sm-12 bg-dark text-white rounded-3 shadow'>
        <div className='d-flex justify-content-center m-2'>
            <h3>Formulario</h3>
        </div>
        <div class="col mb-3">
            <label for="formGroupExampleInput" class="form-label mx-2 w-25">Nombre</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="indique nombre"
            id="nombre" 
            name="nombre"
            value={nombre} 
            onChange={handleInputChange}/>
        </div>
        <div className="col mb-3">
            <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Apellido</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="indique apellido"
            id="apellido" 
            name="apellido"
            value={apellido}
            onChange={handleInputChange}/>
        </div>
        <div className="col mb-3">
            <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Equipo</label>
            <input 
            type="" 
            className="form-control" 
            placeholder="numero de equipo" 
            id="equipo_id"
            name="equipo_id"
            value={equipo_id}
            onChange={handleInputChange}/>
        </div>
        <div className='col-12'>
            <button type="button" className="btn btn-outline-info d-flex justify-content-center w-100" onClick={()=>agregarEstudiante(estudiante)}>Guardar</button>
        </div>
    </div>
    )
}

export {FormularioAlumno};