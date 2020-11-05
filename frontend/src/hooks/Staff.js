/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useUser } from './User';

const StaffContext = createContext();

export default function StaffProvider({ children }) {
  const { user } = useUser();
  const [staff, setStaff] = useState(false);

  useEffect(() => {
    if (user.wsRole !== 'Member') setStaff(true);
  }, [user]);

  return (
    <StaffContext.Provider
      value={{
        staff,
        setStaff
      }}
    >
      {children}
    </StaffContext.Provider>
  );
}

export function useStaff() {
  const context = useContext(StaffContext);
  const { staff, setStaff } = context;
  return { staff, setStaff }
}
