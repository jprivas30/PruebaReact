import React from "react";
import { useEffect, useState } from "react";
import { FormularioAlumno, TablaAlumno } from "../components";
import { estudianteAdd, estudianteDelete, getAll,  } from "../services/EstudianteService";


const FormularioTabla = () => {
    const [estudiante, setEstudiante] = useState([]);

    const obtenerEstudiantes = async () => {
        setEstudiante(await getAll());
    }
    const agregarEstudiante = async (estudiante)=> {

        await estudianteAdd(estudiante);
        obtenerEstudiantes(estudiante);
    }

    const eliminarEstudiante = async(id)=>{
        await estudianteDelete(id);
        obtenerEstudiantes();
    }
    //cada vez que la pagina se recargue, el useEffect corre
    //cada vez que las variables que enten dentro de los [] CAMBIEN el useEffect va a correr 
    useEffect(() => {
        obtenerEstudiantes();
    }, [])

    return (
        <div className='container'>
            <div className='text-center'>
                <h1>Estudiantes</h1>
            </div>
            <div className='row'>
                <TablaAlumno estudiante={estudiante} eliminarEstudiante={eliminarEstudiante} />
                <FormularioAlumno agregarEstudiante={agregarEstudiante}/>
            </div>
        </div>
    )
}

export default FormularioTabla;




