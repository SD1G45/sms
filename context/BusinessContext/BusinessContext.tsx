import React, { createContext } from "react";
import { Business } from "../BusinessContext/types";
import Cookie from "js-cookie";

type Dispatch = (action: Action) => void;

type Action = { type: "setBusinessId"; payload: State };

interface State extends Business {}

type CountProviderProps = { children: React.ReactNode };
const BusinessStateContext = createContext<State | null>(null);
const BusinessDispatchContext = createContext<Dispatch>(() => {});

const businessReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setBusinessId": {
      Cookie.set("businessId", action.payload.businessId || "", { expires: 7 });
      Cookie.set("businessName", action.payload.name || "", { expires: 7 });
      return action.payload;
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const BusinessProvider = ({ children }: CountProviderProps) => {
  const businessId = Cookie.get("businessId");
  const name = Cookie.get("businessName");
  const [state, dispatch] = React.useReducer(businessReducer, {
    businessId: businessId || null,
    name: name || null,
  });

  return (
    <BusinessStateContext.Provider value={state}>
      <BusinessDispatchContext.Provider value={dispatch}>
        {children}
      </BusinessDispatchContext.Provider>
    </BusinessStateContext.Provider>
  );
};

function useBusinessState() {
  const context = React.useContext(BusinessStateContext);
  return context;
}

function useBusinessDispatch() {
  const context = React.useContext(BusinessDispatchContext);
  return context;
}

export { BusinessProvider, useBusinessState, useBusinessDispatch };
