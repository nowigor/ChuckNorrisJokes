import React, { useEffect, useState } from "react";
import "./Home.css";
import { getRandomJoke } from "../../services/chuck-norris-api-calls";
import { ChuckNorrisJoke } from "../../Interfaces/ChuckNorrisJokes-interface";
import SingleJoke from "../../common/SingleJoke/SingleJoke";

const Home = () => {
    const [joke, setJoke] = useState<ChuckNorrisJoke>();

    const fetchJoke = async () => {
        try {
            const result = await getRandomJoke();
            setJoke(result);
            console.log("cos", result.icon_url)
        } catch (error) {
            console.log("Err: ", error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []); 

    return (
        <div className="home-design">   
            <SingleJoke
                icon_url={joke?.icon_url}
                id={joke?.id}
                value={joke?.value}
            />
            <button onClick={fetchJoke}>get random joke</button>

        </div>

    );
};

export default Home;
