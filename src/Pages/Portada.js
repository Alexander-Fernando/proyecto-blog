import React from 'react';
// import '../index.css';
import { Link } from 'react-router-dom';

const Portada = () => {
    return (
        <div className="port " >
            {/* <div class="row justify-content-around"> */}
                <div className="prim d-flex justify-content-center align-items-center">
                    <Link to="/pagina2" className="boton1 btn btn-secondary">Historias</Link>
                </div>
                <div className="seg d-flex justify-content-center align-items-center">
                    <Link to="/pagina3" className="boton2 btn btn-secondary">Juegos</Link>
                </div>
            {/* </div> */}
        </div > 
    )
}

export default Portada

// import '../App.css';

// const Portada = () => {
//   return (
//     <div className="portada">
      
//     </div>
//   );
// }

// export default Portada;

