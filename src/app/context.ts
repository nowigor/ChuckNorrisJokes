import { createContext } from "react";
import { ContextProps } from "../Interfaces/ContextProvider-interface"; 

// Utworzenie kontekstu z domyślną wartością null
export const myContext = createContext<ContextProps | null>(null);