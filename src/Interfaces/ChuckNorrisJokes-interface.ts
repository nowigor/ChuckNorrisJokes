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
    icon_url: string | undefined;
    id: string | undefined;
    value: string | undefined;
}

export type ChuckNorrisJokesCategories = string[];

export interface ChuckNorrisJokeWithQuery
{
    total: number
    result: ChuckNorrisJoke[]
}
