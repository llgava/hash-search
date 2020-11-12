/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';
import fetch from 'node-fetch';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const UserFetch = await fetch('/me');
    const UserData = await UserFetch.json();

    setUser(UserData);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  return { user, setUser }
}
