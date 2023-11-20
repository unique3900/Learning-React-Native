import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Initial Value');

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;