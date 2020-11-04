import React from 'react';

// Components
import Header from '../components/Header';

// Containers
import UserProvider from '../contexts/User';
import LoggedInProvider from '../contexts/LoggedIn';
import StaffProvider from '../contexts/Staff';

export default function HeaderWithProviders() {
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
