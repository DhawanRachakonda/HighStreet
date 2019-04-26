import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import IfExample from '../components/IfExample.jsx';
import OnlyIfHOC from '../components/Only-If-hoc.jsx';
import FlightServices from '../components/FlightServices.jsx';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/only-if" component={IfExample} />
        <Route exact path="/only-if-hoc" component={OnlyIfHOC} />
        <Route exact path="/flight-services" component={FlightServices} />
        <Redirect exact from="/" to="/flight-services" />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
