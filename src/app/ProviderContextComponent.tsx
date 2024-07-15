import React, { useState, useContext} from "react";
import { AuthState, State, MyProviderProps} from "../Interfaces/ContextProvider-interface";
import { ChuckNorrisJoke} from "../Interfaces/ChuckNorrisJokes-interface";
import { myContext } from "./context";

const defaultState: State = {
  auth: {
    token: "",
    name: "",
  },
  favorites: [] 
};

export const useMyContext = () => {
  const context = useContext(myContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
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

  const addFavoriteJoke = (joke: ChuckNorrisJoke | ChuckNorrisJoke[]) => {
    setState((prevState) => ({
      ...prevState,
      favorites: Array.isArray(joke) ? [...prevState.favorites, ...joke] : [...prevState.favorites, joke],
    }));
  };

  const removeFavoriteJoke = (jokeId: string) => {
    setState((prevState) => ({
      ...prevState,
      favorites: prevState.favorites.filter((joke) => joke.id !== jokeId),
    }));
  };

  return (
    <myContext.Provider value={{ state, SetAuth, addFavoriteJoke, removeFavoriteJoke}}>
      {children}
    </myContext.Provider>
  );
};
