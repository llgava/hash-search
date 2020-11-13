/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';
import fetch from 'node-fetch';

const BotContext = createContext();

export default function BotProvider({ children }) {
  const [bot, setBot] = useState([]);

  useEffect(async () => {
    const BotFetch = await fetch('/bots/all');
    const BotData = await BotFetch.json();

    setBot(BotData); // Array[{...}]
  }, []);

  return (
    <BotContext.Provider
      value={{
        bot,
        setBot
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

export function useBot() {
  const context = useContext(BotContext);
  const { bot, setBot } = context;
  return { bot, setBot }
}
