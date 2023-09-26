import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileObj, setProfileObj] = useState(null);

  return (
    <ProfileContext.Provider value={{ profileObj, setProfileObj }}>
      {children}
    </ProfileContext.Provider>
  );
};
