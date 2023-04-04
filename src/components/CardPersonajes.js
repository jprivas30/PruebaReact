import React from "react";

const CardPersonajes = ({ personajes }) => {
    return (
        <div class="container-card">
            {personajes.map(pmarvel => (
                <div class="card">
                    <img src={pmarvel.imagen}/>
                    <h3>Alias: {pmarvel.nombre_super}</h3>
                    <p>Nombre: {pmarvel.nombre_real}</p>
                    <p>Poder: {pmarvel.poder}</p>
                </div>
            ))}
        </div>
    )
}

const CardPersonajesDragonBall = ({ personajesdb }) => {
    return (
        <div class="container-card">
            {personajesdb.map(pdb => (
                <div class="card">
                    <img src={pdb.imagen}/>
                    <h3>Nombre: {pdb.nombre}</h3>
                    <p>Raza: {pdb.raza}</p>
                    <p>Poder: {pdb.poder}</p>
                </div>
            ))}
        </div>
    )
}



export { CardPersonajes, CardPersonajesDragonBall };