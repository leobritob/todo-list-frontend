import React, { useState, createContext, useContext } from "react";

import { IUser } from "interfaces";

type UserContextProps = {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
};

const Context = createContext<UserContextProps>({
  user: undefined,
  setUser: () => null,
});

export const useUserContext = () => useContext(Context);

export const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
