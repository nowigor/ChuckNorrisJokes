// Interfaces/ContextProvider-interface.ts
import { ChuckNorrisJoke } from "./ChuckNorrisJokes-interface";

export interface AuthState {
  token: string;
  name: string;
}

export interface State {
  auth: AuthState;
  favorites: ChuckNorrisJoke[]; // Zaktualizowana definicja dla favorites
}

export interface ContextProps {
  state: State;
  SetAuth: (target: keyof AuthState, payload: string) => void;
  addFavoriteJoke: (joke: ChuckNorrisJoke | ChuckNorrisJoke[]) => void;
  removeFavoriteJoke: (jokeId: string) => void;
}

export interface MyProviderProps {
  children: React.ReactNode;
}
