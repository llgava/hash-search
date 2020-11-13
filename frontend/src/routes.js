import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages component
import Home from './pages/home';
import AddBot from './pages/add-bot';

// Hooks
import { useLoggedIn } from './hooks/LoggedIn';

export default function Routes() {
  const { loggedIn } = useLoggedIn();

  let authComponents = { addBots: undefined }

  // If the user are logged in, certain component will be rendered as page component.
  if(loggedIn) {
    authComponents.addBots = AddBot;
  } else {
    authComponents.addBots = Home;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home', '/index']} component={Home} />
        <Route exact path='/add-bot' component={authComponents.addBots} />
      </Switch>
    </BrowserRouter>
  );
}
