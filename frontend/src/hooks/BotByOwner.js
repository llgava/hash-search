/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { useUser } from './User';

const BotByOwnerContext = createContext();

export default function BotByOwnerProvider({ children }) {
  const [botByOwner, setBotByOwner] = useState([]);
  const { user } = useUser();

  useEffect(async () => {
    const BotByOwnerFetch = await fetch(`/bots/owner/${user.discord_id}`);
    const BotByOwnerData = await BotByOwnerFetch.json();

    if (user.length !== 0) {
      console.log(user.discord_username)
      setBotByOwner(BotByOwnerData); // Array[{...}]
    }
  }, [user]);

  return (
    <BotByOwnerContext.Provider
      value={{
        botByOwner,
        setBotByOwner
      }}
    >
      {children}
    </BotByOwnerContext.Provider>
  );
}

export function useBotByOwner() {
  const context = useContext(BotByOwnerContext);
  const { botByOwner, setBotByOwner } = context;
  return { botByOwner, setBotByOwner }
}
