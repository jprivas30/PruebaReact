import React from "react";
import { useEffect, useState } from "react";
import { CardPersonajes } from "../components";
import { getAllPmarvel } from "../services/PersonajesService";
import { CardPersonajesDragonBall } from "../components/CardPersonajes";
import { getAllDb } from "../services/PersonajesService";



const CardPage = () => {
    const [personajesdb, setPersonajesdb]= useState([]);
    const [personajes, setPersonajes] = useState([]);

    const obtenerPersonajeDb = async() => {
        setPersonajesdb(await getAllDb()); 
    }

    useEffect(() => {
        obtenerPersonajeDb();
    },[])

    const obtenerPersonajeMarvel = async () => {
        setPersonajes(await getAllPmarvel());
    }
    //cada vez que la pagina se recargue, el useEffect corre
    //cada vez que las variables que enten dentro de los [] CAMBIEN el useEffect va a correr 
    useEffect(() => {
        obtenerPersonajeMarvel();
    }, [])

    return (
        <div>
            < CardPersonajes personajes= {personajes}/>
            < CardPersonajesDragonBall personajesdb= {personajesdb}/>
        </div>
    )
}

export default CardPage;
