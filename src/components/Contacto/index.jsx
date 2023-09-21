import React from "react";
import Redes from "../Redes";
import './contacto.css'

export const Contacto = () => {
    return (
        <div className="contacto">
            <h1 className="titulo"> Contacto </h1>
            <p className="sutitulo"> Please fill out the form below to send us an email.</p>
            <p className="contexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Redes />
        </div>
        
    );
}

export default Contacto;