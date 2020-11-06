import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import MyBots from './pages/my-bots';
import AccountSettings from './pages/account-settings';

import { useLoggedIn } from './hooks/LoggedIn';

export default function Routes() {
  const { loggedIn } = useLoggedIn();

  let authComponents = {
    myBots: undefined,
    accountSettings: undefined
  }

  if(loggedIn) {
    authComponents = {
      myBots: MyBots,
      accountSettings: AccountSettings
    }
  } else {
    authComponents = {
      myBots: Home,
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
