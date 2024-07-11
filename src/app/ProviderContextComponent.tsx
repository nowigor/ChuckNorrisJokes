import React, { useState, useContext } from "react";
import { AuthState, State, MyProviderProps, ContextProps } from "../Interfaces/ContextProvider-interface";
import { myContext } from "./context";

const defaultState: State = {
  auth: {
    token: "",
    name: "",
  },
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultState);

  const SetAuth = (target: keyof AuthState, payload: string) => {
    setState((prevState) => ({
      ...prevState,
      auth: {
        ...prevState.auth,
        [target]: payload,
      },
    }));
  };

  return (
    <myContext.Provider value={{ state, SetAuth }}>
      {children}
    </myContext.Provider>
  );
};

export const useMyContext = (): ContextProps => {
  const context = useContext(myContext);
  if (context === null) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};