/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Container, Profile, Items, Item } from './styles';

import { useUser } from '../../hooks/User';

import { ItemsValues } from './index.content';

export default function DropdownMenu() {
  const { user } = useUser();

  const BaseURL = 'https://cdn.discordapp.com/avatars/'
  const UserAvatar = `${BaseURL}${user.dsId}/${user.dsAvatar}` // BaseURL + User ID + User Avatar

  return (
    <Container>
      <Profile>
        <img src={UserAvatar} alt='User avatar' />
        <div>
          <h1>{user.dsUsername}#{user.dsDiscriminator}</h1>
          <p>{user.wsRole}</p>
        </div>
      </Profile>

      <Items>
        {/* Map all the objects on ItemsValues */}
        {ItemsValues.map((menuItem, index) => {
          return (
            <a href={menuItem.event}>
            <Item>
              {menuItem.icon}
              <h1 style={{ color: menuItem.label.color }}>{menuItem.label.text}</h1>
            </Item>
            </a>
          )
        })}
      </Items>
    </Container>
  );
}
