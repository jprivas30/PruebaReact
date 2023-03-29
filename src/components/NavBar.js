import React from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="mainContainer">
            <Link to="/"><img src="https://i.ibb.co/7StzrFv/Dise-o-sin-t-tulo.png" alt="" height="70px"/></Link>
            <a href="/html/nosotros.html">Nosotros</a>
            <a href="/html/colaboradoras.html">Colaboradoras</a>
            <a href="/html/noticias.html">Noticias</a>
            <div class="dropdown d-block">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Crece
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/html/herramientas.html">Herramientas</a></li>
                    <li><a class="dropdown-item" href="/html/habilidades.html">Habilidades</a></li>
                </ul>
            </div>
            <div class="dropdown d-block">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Conéctate
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/html/foros.html">Foros</a></li>
                    <li><a class="dropdown-item" href="/html/eventos.html">Eventos</a></li>
                </ul>
            </div>
            <Link to="/Login" class="buttonreg">Ser Socia</Link>
        </div>
    )
}

export default NavBar;



