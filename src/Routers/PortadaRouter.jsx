import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portada from '../Pages/Portada';
import AppRouter from './AppRouter';

const PortadaRouter = () => {
    return (
        <Router>

            <AppRouter />
            <Switch>
                <Route exact path="/inicio" component={Portada} />
            </Switch>
        </Router>
    )
}

export default PortadaRouter
