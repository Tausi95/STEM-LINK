// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
  });
  
  const [user, setUser] = useState(() => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
