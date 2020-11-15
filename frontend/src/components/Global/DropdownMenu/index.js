/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import { Container, Profile, Items, Item } from './styles';
import { useUser } from '../../../hooks/User';
import { ItemsValue } from './ItemsValue';

export default function DropdownMenu() {
  const { user } = useUser();
  const Avatar = `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.discord_avatar}` // BaseURL + User ID + User Avatar

  return (
    <Container>
      <Profile>
        <img src={Avatar} alt='User avatar' />
        <div>
          <h1>{user.discord_username}</h1>
          <p>{user.website_role}</p>
        </div>
      </Profile>

      <Items>
        {/* Map all the objects on ItemsValue */}
        {ItemsValue.map((item, index) => {
          return (
            <a href={item.event}>
            <Item>
                {item.icon}
                <h1 style={{ color: item.label.color }}>{item.label.text}</h1>
            </Item>
            </a>
          )
        })}
      </Items>
    </Container>
  );
}
