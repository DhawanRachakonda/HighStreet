import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import IfExample from '../components/IfExample.jsx';
import OnlyIfHOC from '../components/Only-If-hoc.jsx';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/only-if" component={IfExample} />
        <Route exact path="/only-if-hoc" component={OnlyIfHOC} />
        <Redirect exact from="/" to="/only-if" />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
