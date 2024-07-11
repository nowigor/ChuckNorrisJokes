import { UserCredentials } from "../Interfaces/Login-interface";

const root = "https://dummyjson.com/";

export async function LoginMe(credentials: UserCredentials): Promise<any> {
    try {
      const response = await fetch(`${root}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
          expiresInMins: 30,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error; 
    }
  }