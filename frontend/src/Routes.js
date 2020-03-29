import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Register from './Page/register';
import Logon from './Page/logon';
import Profile from './Page/Profile';
import NewIncident from './Page/Newincident/index';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />


      </Switch>
    </BrowserRouter>
  );
}
