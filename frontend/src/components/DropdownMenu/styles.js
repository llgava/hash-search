import styled from 'styled-components';

import Colors from '../../assets/styles/Colors.json';
import BackgroundProfile from '../../assets/images/background-profile.png';

export const Container = styled.div`
  width: 320px;
`;

export const Profile = styled.div`
  background-image: url(${BackgroundProfile});
  background-color: ${Colors.dark_blue};
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 15px 15px 0 0;

  // Profile Avatar.
  img {
    background-color: ${Colors.blue};
    width: 64px;
    height: auto;
    border-radius: 32px;
    margin-right: 15px;
  }

  // Profile informations (Username and role).
  h1, p { color: white; }
  h1 { font-size: 20px; }
  p { font-weight: 500; }
`;
