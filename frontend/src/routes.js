import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages component
import Home from './pages/home';
import AddBot from './pages/add-bot';
import MyBots from './pages/my-bots';

// Hooks
import { useLoggedIn } from './hooks/LoggedIn';

export default function Routes() {
  const { loggedIn } = useLoggedIn();

  let authComponents = {
    addBots: undefined,
    myBots: undefined
  }

  // If the user are logged in, certain component will be rendered as page component.
  if(loggedIn) {
    authComponents.addBots = AddBot;
    authComponents.myBots = MyBots;
  } else {
    authComponents.addBots = Home;
    authComponents.myBots = Home;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home', '/index']} component={Home} />
        <Route exact path='/add-bot' component={authComponents.addBots} />
        <Route exact path='/my-bots' component={authComponents.myBots} />
      </Switch>
    </BrowserRouter>
  );
}
