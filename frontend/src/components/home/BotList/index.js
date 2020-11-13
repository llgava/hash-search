import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

// Elements (e.g: Components, hooks, images and videos).
import { useBot } from '../../../hooks/Bot';
import { Container, BotFrame } from './styles';

function BotList() {
  const { bot } = useBot();

  return (
    <Container>
      <BotFrame>
        {bot.map((valueOf, index) => {
          return (
            <div>
              <img src={valueOf.avatarURL} alt='Avatar of the bot' />
              <h2>{valueOf.name}</h2>
              <p>{valueOf.description}</p>

              <a href={valueOf.inviteURL} target='_blank' rel='noreferrer'>
                <span>
                  <h3>add bot</h3>
                  <FaPlusCircle />
                </span>
              </a>
            </div>
          )
        })}
      </BotFrame>
    </Container>
  );
}

export default BotList;
