export interface ChuckNorrisJoke {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}
export interface ChuckNorrisJokePrev {
    joke: ChuckNorrisJoke
}

export type ChuckNorrisJokesCategories = string[];

export interface ChuckNorrisJokeWithQuery
{
    total: number
    result: ChuckNorrisJoke[]
}