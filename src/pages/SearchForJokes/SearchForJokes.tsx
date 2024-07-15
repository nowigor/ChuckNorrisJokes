import { useEffect, useState } from "react";
import CInput from "../../common/CInput/CInput";
import "./SearchForJokes.css";
import { ChuckNorrisJokeWithQuery, ChuckNorrisJoke } from "../../Interfaces/ChuckNorrisJokes-interface";
import { getChuckNorriesJokeWithQuery } from "../../services/chuck-norris-api-calls";
import SingleJoke from "../../common/SingleJoke/SingleJoke";

const SearchForJokes = () => {
    const [search, setSearch] = useState<string>("");
    const [jokes, setJokes] = useState<ChuckNorrisJokeWithQuery>();
    const [isSearchEmpty, setIsSearchEmpty] = useState<boolean>(true);

    const fetchJokes = async () => {
        try {
            const result = await getChuckNorriesJokeWithQuery(search);
            setJokes(result);
            console.log("RES", result);
        } catch (error: any) {
            console.log("Err: ", error);
        }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length >= 3) {
            setSearch(value);
            setIsSearchEmpty(false);
        } else if (value.length === 0) {
            setJokes(undefined);
            setSearch("");
            setIsSearchEmpty(true);
        }
    };

    useEffect(() => {
        console.log(jokes);
    }, [jokes]);

    return (
        <div className="search-design">
            <div className="searchbar-design">
                <CInput
                    type="text"
                    name="Search text in jokes"
                    design="input-design"
                    placeholder="Free text search"
                    onChange={inputHandler}
                />
                <button onClick={fetchJokes} className="button-design">Find a joke</button>
            </div>
            <div className="jokes-card-wrapper">
                {isSearchEmpty ? (
                    <div className="text">Please enter a search term to find jokes.</div>
                ) : jokes && jokes.total > 0 ? (
                    jokes.result.map((joke: ChuckNorrisJoke) => (
                        <SingleJoke key={joke.id} joke={joke} />
                    ))
                ) : (
                    <div className="text">There are no jokes with the word: {search}</div>
                )}
            </div>
        </div>
    );
};

export default SearchForJokes;
