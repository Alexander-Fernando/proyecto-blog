import React from 'react'
import Footer from '../Componentes/Footer'
import HistoryCards from '../Componentes/HistoryCards'
import Navbar from '../Componentes/Navbar'
import owlCarusel from '../Componentes/owlCarusel'

const Prueba = () => {
    return (
        <>
            <Navbar />
        <div className="container">
            <div className="row">
                <div className="text-center col-12 mt-3">
                    <h1>Nombre de la plataforma</h1>
                    <HistoryCards />
                </div>
            </div>

            <div className="row">
                <h2 className="text-center">Títulos más importantes</h2>
                <p className="text-center">El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.</p>
            </div>

            
        </div>
        <Footer />
        </>
    )
}

export default Prueba
