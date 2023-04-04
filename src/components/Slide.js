import React from "react";
import fondo1 from "../assets/img/fondo1.svg"
import fondo2 from "../assets/img/fondo2.svg"
import fondo3 from "../assets/img/fondo3.svg"

const Slide = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={fondo1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={fondo2}  class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={fondo3}  class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Proxima</span>
            </button>
        </div>
    )
}

export {Slide};