export interface AuthState {
    token: string;
    name: string;
  }
  
  export interface State {
    auth: AuthState;
  }
  
  export interface ContextProps {
    state: State;
    SetAuth: (target: keyof AuthState, payload: string) => void;
  }
  
  export interface MyProviderProps {
    children: React.ReactNode;
  }