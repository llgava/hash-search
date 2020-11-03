import React from 'react';
import { useUser } from '../../contexts/User';

import { Container, Profile } from './styles';

export default function DropdownMenu() {
  const { user } = useUser();

  const BaseURL = 'https://cdn.discordapp.com/avatars/'
  const UserAvatar = `${BaseURL}${user.dsID}/${user.dsAvatar}` // BaseURL + User ID + User Avatar

  return (
    <Container>
      <Profile>
        <img src={UserAvatar} />
        <div>
          <h1>{user.dsUsername}</h1>
          <p>{user.wsRole}</p>
        </div>
      </Profile>
    </Container>
  );
}
