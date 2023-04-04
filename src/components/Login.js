import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/img/login.svg"

const Login = () => {
    return (
        <div class="login-wrap">
            <div>
                <img src={login} height="400px" alt=""/>
            </div>
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Iniciar Sesión</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Registrarse</label>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label for="user" class="label">Nombre de Usuario</label>
                                    <input id="user" type="text" class="input"/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Contraseña</label>
                                    <input id="pass" type="password" class="input" data-type="password"/>
                                </div>
                                <div class="group">
                                    <input id="check" type="checkbox" class="check" checked/>
                                        <label for="check"><span class="icon"></span>Mantener sesión iniciada</label>
                                </div>
                                <div class="group">
                                    <input type="submit" class="button" value="Iniciar Sesión"/>
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <Link to ="/login">¿Olvidaste la Contraseña?</Link>
                                </div>
                            </div>
                            <div class="sign-up-htm">
                                <div class="group">
                                    <label for="user" class="label">Nombre de Usuario</label>
                                    <input id="user" type="text" class="input" />
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Contraseña</label>
                                    <input id="pass" type="password" class="input" data-type="password" />
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Repetir Contraseña</label>
                                    <input id="pass" type="password" class="input" data-type="password" />
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Correo Electronico</label>
                                    <input id="pass" type="text" class="input" />
                                </div>
                                <div class="hr"></div>
                                <div class="group">
                                    <input type="submit" class="button" value="Registrarse" />
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <label for="tab-1">¿Ya estas registrado?</label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            )
}

export {Login};