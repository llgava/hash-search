import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages component
import Home from './pages/home';

// Hooks
//import { useLoggedIn } from './hooks/LoggedIn';

export default function Routes() {
  //const { loggedIn } = useLoggedIn();

  // E.g: myBots: undefined
  //let authComponents = {}

  // If the user are logged in, certain component will be rendered as page component.
  /* if(loggedIn) {
    authComponents = {}
  } else {
    authComponents = {}
  } */

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home', '/index']} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
