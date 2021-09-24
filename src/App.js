// 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Pagina2 from './Componentes/Pagina2';
import Pagina3 from './Componentes/Pagina3';
import Portada from './Pages/Portada';


function App() {
  return (
    <Router>
        <Portada />
        <Switch>
          <Route path="/pagina2">
            <Pagina2 />
          </Route>
          <Route path="/pagina3">
            <Pagina3 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
