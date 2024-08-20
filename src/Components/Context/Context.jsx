import React, { useState } from 'react'
import { createContext } from 'react';

export const users = createContext({});

const Context = ({ children }) => {
    const [user, setUser] = useState({});

  return <users.Provider value={{ user, setUser}} >{children}</users.Provider>
}

export default Context;