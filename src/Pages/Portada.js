import React from 'react';
import { Link } from 'react-router-dom';

const Portada = () => {
    return (
        <div className="port">
                <div className="prim d-flex justify-content-center align-items-center">
                    <Link to="/portadaH" className="boton1 btn btn-secondary">Historias</Link>
                </div>
                <div className="seg d-flex justify-content-center align-items-center">
                    <Link to="/portadaV" className="boton2 btn btn-secondary">Juegos</Link>
                </div>
        </div > 
    )
}

export default Portada

