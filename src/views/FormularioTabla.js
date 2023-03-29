import React from 'react';
import {TablaAlumno, FormularioAlumno} from '../components';

const formularioTabla = () => {
    return (
        <div className='container md-5'>
            <div className='row'>
                <div className='text-center'>
                    <h1>Estudiantes</h1>
                </div>
                <TablaAlumno />
                <FormularioAlumno />
            </div>
        </div>
    )
}

export default formularioTabla;




