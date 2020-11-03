import React from 'react';
import { FaCrown, FaSignOutAlt, FaThList, FaUser } from 'react-icons/fa';

import { Container, Profile, Items, Item } from './styles';

import { useUser } from '../../contexts/User';

import { ItemsValues } from './index.content';

export default function DropdownMenu() {
  const { user } = useUser();

  const BaseURL = 'https://cdn.discordapp.com/avatars/'
  const UserAvatar = `${BaseURL}${user.dsID}/${user.dsAvatar}` // BaseURL + User ID + User Avatar
  const IconSize = 25;

  return (
    <Container>
      <Profile>
        <img src={UserAvatar} />
        <div>
          <h1>{user.dsUsername}</h1>
          <p>{user.wsRole}</p>
        </div>
      </Profile>

      <Items>
        {
          ItemsValues.map((menuItem) => {
            return (
              <Item onClick={menuItem.event}>
                {menuItem.icon}
                <h1 style={{color: menuItem.label.color}}>{menuItem.label.text}</h1>
              </Item>
            )
          })
        }
      </Items>

    </Container>
  );
}
