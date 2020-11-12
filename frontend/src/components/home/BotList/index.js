import React from 'react';
import { useBot } from '../../../hooks/Bot';

import { Container, BotFrame } from './styles';

function BotList() {
  const { bot } = useBot();

  return (
    <Container>
      <BotFrame>
        {bot.map((valueOf, index) => {
          return(
            <div>
              <img src={valueOf.avatarURL} alt='Avatar of the bot' />
              <h2>{valueOf.name}</h2>
              <p>{valueOf.description}</p>

              <span>
                <h3>add bot</h3>
              </span>
            </div>
          )
        })}
      </BotFrame>
    </Container>
  );
}

export default BotList;
