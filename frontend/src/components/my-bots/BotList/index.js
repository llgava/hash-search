/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useBotByOwner } from '../../../hooks/BotByOwner';


// Elements (e.g: Components, hooks, images and videos).
import { BotFrame } from './styles';

function BotList() {
  const { botByOwner } = useBotByOwner();

  return (
    <BotFrame>
      {botByOwner.map((valueOf, index) => {
        const base_url = 'https://cdn.discordapp.com/avatars/';
        const avatar_url = `${base_url}${valueOf.client_id}/${valueOf.avatar}`;

        return (
          <div>

            <img src={avatar_url} alt='Avatar' />
            <h2>{valueOf.name}</h2>
            <p>{valueOf.description}</p>
          </div>
        )
      })}
    </BotFrame>
  );
}

export default BotList;
