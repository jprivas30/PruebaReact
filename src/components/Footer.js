import React from "react";
import soysociawh from "../assets/img/soysociawh.svg"

const Footer = () => {
    return (
        <div>
            <footer>
                <div >
                    <img src={soysociawh} alt=""/>
                </div>
                <div>

                    <ul>
                        <li><a href="nosotros.html"><h6>Nosotros</h6></a></li>
                        <li>Misión</li>
                        <li>Visión</li>
                        <li>Equipo</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h6>Comunidad</h6></li>
                        <li><a href="colaboradoras.html">Colaboradoras</a></li>
                        <li><a href="noticias.html">Noticias</a></li>
                        <li><a href="eventos.html">Eventos</a></li>
                        <li><a href="foros.html">Foros</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h6>Recursos</h6></li>
                        <li><a href="habilidades.html">Habilidades</a></li>
                        <li><a href="herramientas.html">Herramientas</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h6>Ayuda</h6></li>
                        <li>Contacto</li>
                        <li>Soporte</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export {Footer};