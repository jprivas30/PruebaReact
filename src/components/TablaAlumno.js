import React from "react";

const TablaAlumno = ({estudiante, eliminarEstudiante}) => {
    return (
        <div className='col-md-6 p-3 col-sm-12 rounded-3 shadow'>
        <div className='d-flex justify-content-center m-2'>
            <h3>Lista</h3>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr className='bg-light text-dark'>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiante.map(e => (
                    <tr>
                        <th scope="row">{e.estudiante_id}</th>
                        <td>{e.nombre}</td>
                        <td>{e.apellido}</td>
                        <td>{e.equipo_id}</td>
                        <td>
                            <div className='row'>
                                <button type="button" className="btn btn-outline-secondary m-1 col-md-5 col-sm-12">Editar</button>
                                <button type="button" className="btn btn-outline-danger m-1 col-md-5 col-sm-12" onClick={()=>{eliminarEstudiante(e.estudiante_id)}}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )

}

export {TablaAlumno};