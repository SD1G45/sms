import React, { createContext } from "react";
import { Business } from "../BusinessContext/types";
import Cookie from "js-cookie";

type Dispatch = (action: Action) => void;

type Action =
  | { type: "setActiveBusiness"; payload: State }
  | { type: "setBusinessLogoUrl"; logoUrl: string };

interface State extends Business {}

type CountProviderProps = { children: React.ReactNode };
const BusinessStateContext = createContext<State | null>(null);
const BusinessDispatchContext = createContext<Dispatch>(() => {});

const businessReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setActiveBusiness": {
      Cookie.set("businessId", action.payload.businessId || "", { expires: 7 });
      Cookie.set("businessName", action.payload.name || "", { expires: 7 });
      Cookie.set("businessPhoneNumber", action.payload.phoneNumber || "", {
        expires: 7,
      });
      Cookie.set("businessLogoUrl", action.payload.logoUrl || "", {
        expires: 7,
      });
      return action.payload;
    }

    case "setBusinessLogoUrl": {
      Cookie.set("businessLogoUrl", action.logoUrl || "");
      return {
        ...state,
        logoUrl: action.logoUrl,
      };
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const BusinessProvider = ({ children }: CountProviderProps) => {
  const businessId = Cookie.get("businessId");
  const name = Cookie.get("businessName");
  const logoUrl = Cookie.get("businessLogoUrl");
  const phoneNumber = Cookie.get("businessPhoneNumber");
  const [state, dispatch] = React.useReducer(businessReducer, {
    businessId: businessId || null,
    name: name || null,
    logoUrl: logoUrl || null,
    phoneNumber: phoneNumber || null,
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
