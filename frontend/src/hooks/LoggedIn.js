/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useUser } from './User';

const LoggedInContext = createContext();

export default function LoggedInProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user.length !== 0) setLoggedIn(true);
  }, [user]);

  return (
    <LoggedInContext.Provider
      value={{
        loggedIn,
        setLoggedIn
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
}

export function useLoggedIn() {
  const context = useContext(LoggedInContext);
  const { loggedIn, setLoggedIn } = context;
  return { loggedIn, setLoggedIn }
}
