import React from "react";

const TablaAlumno = () => {
    return (
        <div className='col-6 m-3 rounded-3 shadow'>
        <div className='d-flex justify-content-center m-2'>
            <h3>Lista</h3>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr className='bg-light text-dark'>
                        <th scope="col">Id Equipo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">7</th>
                        <td>Karen</td>
                        <td>Rodriguez</td>
                        <td>
                            <div className='d-flex'>
                                <button type="button" className="btn btn-outline-secondary ">Editar</button>
                                <button type="button" className="btn btn-outline-danger ms-2">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Gissele</td>
                        <td>Gatica</td>
                        <td>
                            <div className='d-flex'>
                                <button type="button" className="btn btn-outline-secondary">Editar</button>
                                <button type="button" className="btn btn-outline-danger ms-2">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Juan Pablo</td>
                        <td>Mora</td>
                        <td>
                            <div className='d-flex'>
                                <button type="button" className="btn btn-outline-secondary ">Editar</button>
                                <button type="button" className="btn btn-outline-danger ms-2">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )

}

export default TablaAlumno;