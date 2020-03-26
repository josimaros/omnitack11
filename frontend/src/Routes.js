import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//IMPORTAÇÕES DAS PAGINAS
import PageLogin from './screens/Login';
import PageRegister from './screens/Register';
import PageProfile from './screens/Profile';
import PageNewIncidents from './screens/NewIncidents';


export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PageLogin} />
          <Route exact path="/register" component={PageRegister} />
          <Route exact path="/profile" component={PageProfile} />
          <Route exact path="/incidents/new" component={PageNewIncidents} />
        </Switch>
      </Router>
    </>
  );
}
