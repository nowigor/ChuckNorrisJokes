import { useEffect, useState } from "react";
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
        {joke &&  
            <SingleJoke joke={joke}/>
        }
            <button onClick={fetchJoke} className="getrandom-button-design">Get another random joke</button>
        </div>

    );
};

export default Home;
