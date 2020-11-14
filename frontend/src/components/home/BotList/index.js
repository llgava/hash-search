import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import { useBot } from '../../../hooks/Bot';
import { Container, BotFrame } from './styles';

function BotList() {
  const { bot } = useBot();

  return (
    <Container>
      <BotFrame>
        {bot.map((valueOf) => {
          const base_url = 'https://cdn.discordapp.com/avatars/';
          const avatar_url = `${base_url}${valueOf.client_id}/${valueOf.avatar}`;

          return (
            <a href={valueOf.invite_url} target='_blank' rel='noreferrer'>
              <div>
                <img src={avatar_url} alt='Avatar' />
                <h2>{valueOf.name}</h2>
                <p>{valueOf.description}</p>
              </div>
            </a>
          )
        })}
      </BotFrame>
    </Container>
  );
}

export default BotList;
