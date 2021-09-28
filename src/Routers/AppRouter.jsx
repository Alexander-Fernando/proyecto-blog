import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from '../Componentes/Login';
import PortadaH from '../Componentes/PortadaH';
import PortadaV from '../Componentes/PortadaV';
import Registro from '../Componentes/Registro';

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/portadaH" component={PortadaH} />
                <Route exact path="/portadaV" component={PortadaV} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />

                <Redirect to="/inicio" />
            </Switch>
        </>
    )
}

export default AppRouter
