import React from 'react';



const App = () => {
    return (
        <div className='container md-5'>
            <div className='row'>
                <div className='text-center'>
                    <h1>Estudiantes</h1>
                </div>
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
                <div className='col-5 m-3 bg-dark text-white rounded-3 shadow'>
                    <div className='d-flex justify-content-center m-2'>
                        <h3>Formulario</h3>
                    </div>
                    <div class="d-flex align-items-end mb-3">
                        <label for="formGroupExampleInput" class="form-label mx-2 w-25">Nombre</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="indique nombre" />
                    </div>
                    <div className="d-flex align-items-end mb-3">
                        <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Apellido</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="indique apellido" />
                    </div>
                    <div className="d-flex align-items-end mb-3">
                        <label for="formGroupExampleInput2" class="form-label mx-2 w-25">Equipo</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="numero de equipo" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-outline-info d-flex justify-content-center w-100">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App