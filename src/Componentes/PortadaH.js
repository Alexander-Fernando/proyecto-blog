import React from 'react'
import libro from '../video/libro.png'
import { Link } from 'react-router-dom';

const Pagina2 = () => {
    return (
        <div>
            <hr/>
            <hr/>
            <div class="text-center">
                <img  src={libro} width="850" height=" 450" alt="" />
            </div>
            <hr/>
            <hr/>
            
            <hr/>
            <div class="container">
                <h2>DESCRIPCION DE LA PAGINA</h2>
                <div class="row">
                    <div class="col">
                        <h3>Parte 1</h3>
                            <p>Texto de prueba para llenar el recuadro y se vea 
                                el maquetado finalizado, como aun falta texto seguire 
                                escribiendo cualquier cosa, ahhh ahhh ahh ahhhh ahhhh ahh
                            </p>
                    </div>
                    <div class="col">
                        <h3>Parte 2</h3>
                            <p>Texto de prueba para llenar el recuadro y se vea 
                                el maquetado finalizado, como aun falta texto seguire 
                                escribiendo cualquier cosa, ahhh ahhh ahh ahhhh ahhhh ahh
                            </p>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                        <h3>Parte 3</h3>
                            <p>Texto de prueba para llenar el recuadro y se vea 
                                el maquetado finalizado, como aun falta texto seguire 
                                escribiendo cualquier cosa, ahhh ahhh ahh ahhhh ahhhh ahh
                            </p>
                    </div>
                    <div class="col">
                        <h3>Parte 4</h3>
                            <p>Texto de prueba para llenar el recuadro y se vea 
                                el maquetado finalizado, como aun falta texto seguire 
                                escribiendo cualquier cosa, ahhh ahhh ahh ahhhh ahhhh ahh
                            </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="card mb-3" style={{ width: '60rem' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={libro} class="img-fluid rounded-start" alt="Sin titulo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{ width: '60rem' }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={libro} class="img-fluid rounded-start" alt="Sin titulo"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <hr/>
            <div class="text-center">
                <h2>LOS MEJORES GENEROS</h2>
                <p>Aqui va la descripcion de los diferenetes generos que se dividiran nuestras historias, sera un resumen de todos ellos</p>
                
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{
                    color: '#FFFFFF',
                    backgroundColor: '#FFFFFF',
                    height: .5,
                    borderColor : '#FFFFFF'
                }} />
                <hr style={{
                    color: '#FFFFFF',
                    backgroundColor: '#FFFFFF',
                    height: .5,
                    borderColor : '#FFFFFF'
                }} />
                <hr style={{
                    color: '#FFFFFF',
                    backgroundColor: '#FFFFFF',
                    height: .5,
                    borderColor : '#FFFFFF'
                }} />
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div class="card bg-dark text-white">
                                <img src={libro} class="card-img" alt="Imagen de prueba"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <hr/>
            <div class="row justify-content-center">
                <div class="card mb-3" style={{ width: '60rem' }}>
                    <div class="text-center row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-4 row align-items-center">
                            <div class="row justify-content-around">
                                    <div class="col-4">
                                        <Link to="/login" className="btn btn-primary">Login</Link>
                                        {/* <button type="button" class="btn btn-primary">Primary</button> */}
                                    </div>
                                    <div class="col-4">
                                        <Link to="/registro" className="btn btn-outline-primary">Registro</Link>
                                        {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
                                    </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Pagina2