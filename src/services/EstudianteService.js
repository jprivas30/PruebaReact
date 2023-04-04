import axios from "axios";
const baseURL = "http://localhost:8080";

const getAll = async () => {
    //                             http://127.0.0.1:8080/estudiante/FindAll
    const rest = await axios.get(baseURL + "/estudiante/FindAll");
    console.log(rest);
    return rest.data;
}

//sintaxis de servicio para enviar estudiante 
/* La variable estudiante debe venir 
{
    estudiante_id:1
    nombre: "Pamela"
    apellido: "Nahum"
    equipo_id: 1
}*/

const estudianteAdd = async (estudiante) => {
    const rest = await axios.post(baseURL + "/estudiante/Save", estudiante);
    console.log(rest);
    return rest.data;
}

const estudianteEdit = async (estudiante) => {
    const rest = await axios.put(baseURL + "/estudiante/Update", estudiante);
    console.log(rest);
    return rest.data
}

const estudianteDelete = async (id) => {
    const rest = await axios.delete(baseURL + "/estudiante/Delete" + id)
    console.log(rest);
    return rest.data

}



export { getAll }