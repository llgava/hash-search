/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import { Container, Profile, Items, Item } from './styles';
import { useUser } from '../../../hooks/User';
import { ItemsValue } from './ItemsValue';

export default function DropdownMenu() {
  const { user } = useUser();
  const Avatar = `https://cdn.discordapp.com/avatars/${user.dsId}/${user.dsAvatar}` // BaseURL + User ID + User Avatar

  return (
    <Container>
      <Profile>
        <img src={Avatar} alt='User avatar' />
        <div>
          <h1>{user.dsUsername}</h1>
          <p>{user.wsRole}</p>
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
