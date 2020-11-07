import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import MyBots from './pages/my-bots';
import AddBot from './pages/add-bot';
import AccountSettings from './pages/account-settings';

import { useLoggedIn } from './hooks/LoggedIn';

export default function Routes() {
  const { loggedIn } = useLoggedIn();

  let authComponents = {
    myBots: undefined,
    addBot: undefined,
    accountSettings: undefined
  }

  // If the user are logged in, certain component will be rendered as page component.
  if(loggedIn) {
    authComponents = {
      myBots: MyBots,
      addBot: AddBot,
      accountSettings: AccountSettings
    }
  } else {
    authComponents = {
      myBots: Home,
      addBot: Home,
      accountSettings: Home
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path='/my-bots' component={authComponents.myBots} />
        <Route exact path='/account-settings' component={authComponents.accountSettings} />
      </Switch>
    </BrowserRouter>
  );
}
