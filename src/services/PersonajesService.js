import axios from "axios";
const baseURL = "http://localhost:8080";

const getAllPmarvel = async ()=>{
//                               http://127.0.0.1:8080/estudiante/FindAll
    const rest = await axios.get(baseURL+"/Pmarvel/FindAll");
    console.log(rest);
    return rest.data;
}

const getAllDb = async()=>{
    const rest = await axios.get(baseURL+"/Pdragonball/FindAll");
    console.log(rest);
    return rest.data;
}

export {getAllPmarvel, getAllDb}