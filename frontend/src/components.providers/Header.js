import React from 'react';

// Components
import Header from '../components/Header';

// Containers
import UserProvider from '../hooks/User';
import LoggedInProvider from '../hooks/LoggedIn';
import StaffProvider from '../hooks/Staff';

function HeaderWithProviders() {
  return (
    <UserProvider>
      <LoggedInProvider>
        <StaffProvider>
          <Header />
        </StaffProvider>
      </LoggedInProvider>
    </UserProvider>
  );
}

export default HeaderWithProviders;
