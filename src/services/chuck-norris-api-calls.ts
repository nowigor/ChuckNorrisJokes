const root = "https://api.chucknorris.io/jokes/";
import { ChuckNorrisJoke, ChuckNorrisJokesCategories, ChuckNorrisJokeWithQuery } from "../Interfaces/ChuckNorrisJokes-interface";

export async function getRandomJoke(): Promise<ChuckNorrisJoke> {
    try {
        const response = await fetch(`${root}random`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const jokeData: ChuckNorrisJoke = await response.json();
        return jokeData;
    } catch (error: any) {
        if (error instanceof Error) {
            throw new Error(`Error fetching Chuck Norris joke: ${error.message}`);
        }
        throw new Error(`Unknown error occurred: ${error}`);
    }
}

export async function getChukNorrisJokesCategories(): Promise<ChuckNorrisJokesCategories> {
    try{
        const response = await fetch(`${root}categories`)

        if(!response.ok)
        {
            throw new Error('Network response was not ok.');

        }
        const categories: ChuckNorrisJokesCategories = await response.json();
        return categories;
    }
    catch(error: any){
        if(error instanceof Error)
        {
            throw new Error(`Error fetching Chuck Norris joke: ${error.message}`);

        }
        throw new Error(`Unknown error occurred: ${error}`);
    }
    
}

export async function getChuckNorriesJokeWithCategory(category: string): Promise<ChuckNorrisJoke>{

    try
    {
        const response = await fetch(`${root}random?category=${category}`)
        if(!response.ok)
        {
            throw new Error('Network response was not ok.');
        }
        const joke: ChuckNorrisJoke = await response.json();
        return joke;

    }
    catch(error: any)
    {
        if(error instanceof Error)
        {
            throw new Error(`Error fetching Chuck Norris joke: ${error.message}`);
        }
        throw new Error(`Unknown error occurred: ${error}`);
    }
}

export async function getChuckNorriesJokeWithQuery(query: string): Promise<ChuckNorrisJokeWithQuery>{

    try{
        const response = await fetch(`${root}search?query=${query}`);
        if(!response.ok)
        {
            throw new Error('Network response was not ok.');
        }
        const jokes: ChuckNorrisJokeWithQuery = await response.json();

        return jokes;
    }catch(error: any)
    {
        if(error instanceof Error)
            {
                throw new Error(`Error fetching Chuck Norris joke: ${error.message}`);
            }
            throw new Error(`Unknown error occurred: ${error}`);
    }
}