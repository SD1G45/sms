import React, { createContext } from "react";
import { User } from "./types";
import Cookie from "js-cookie";

type Dispatch = (action: Action) => void;

type Action =
  | { type: "login"; payload: State }
  | { type: "logout" }
  | { type: "email"; payload: string }
  | { type: "password"; payload: string };

interface State extends User {}

type CountProviderProps = { children: React.ReactNode };
const UserStateContext = createContext<State | null>(null);
const UserDispatchContext = createContext<Dispatch>(() => {});

const userReducer = (state: State | null, action: Action) => {
  switch (action.type) {
    case "login": {
      Cookie.set("token", action.payload.jid, { expires: 7 });
      Cookie.set("firstName", action.payload.firstName, { expires: 7 });
      return action.payload;
    }

    case "logout": {
      Object.keys(Cookie.get()).forEach(function (cookieName) {
        Cookie.remove(cookieName);
      });

      return null;
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const UserProvider = ({ children }: CountProviderProps) => {
  const jid = Cookie.get("token");
  const firstName = Cookie.get("firstName");
  const defaultUserData =
    jid !== undefined && firstName !== undefined ? { jid, firstName } : null;
  const [state, dispatch] = React.useReducer(userReducer, defaultUserData);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

function useUserState() {
  const context = React.useContext(UserStateContext);
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  return context;
}

export { UserProvider, useUserState, useUserDispatch };
