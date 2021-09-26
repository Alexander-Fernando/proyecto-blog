import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Pagina2 from '../Componentes/Pagina2';
import Pagina3 from '../Componentes/Pagina3';

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/pagina2" component={Pagina2} />
                <Route exact path="/pagina3" component={Pagina3} />

                <Redirect to="/inicio" />
            </Switch>
        </>
    )
}

export default AppRouter
