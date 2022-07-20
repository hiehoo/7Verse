import React, { useContext, useState, createContext } from "react";

import { SafeAny } from "../../core/models/common";
// UserResponse thay cho SafeAny

export const UserContext = createContext<SafeAny>(
  {} as SafeAny
);
UserContext.displayName = "UserContext";

type SetUserContextFunc = (user: SafeAny) => void;
export const SetUserContext = createContext<SetUserContextFunc>(null);

export const useUserContext = (): [SafeAny, SetUserContextFunc] => [
  useContext(UserContext),
  useContext(SetUserContext),
];

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<SafeAny>({} as SafeAny);
  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  );
}
