import "./List.css";

import { useState, useEffect, useRef} from "react";
import { getRandomJoke } from "../../services/chuck-norris-api-calls";
import SingleJoke from "../../common/SingleJoke/SingleJoke";
import { ChuckNorrisJoke } from "../../Interfaces/ChuckNorrisJokes-interface";
import CInput from "../../common/CInput/CInput";
const List = () =>
{
    const [jokes, setJokes] = useState<ChuckNorrisJoke[]>([]);
    const [jokesCount, setJokesCount] = useState<number>(0);
    const hasFetched = useRef(false); 

    const fetchJoke = async () => {
            try {
                const result = await getRandomJoke();
                setJokes((prevJokes) => [...prevJokes, result]);
                console.log("cos", result.icon_url)
            } catch (error) {
                console.log("Err: ", error);
            }
        
    };
    const fetchMultipleJokes = async (count: number) => {
        setJokes([]);
        for (let i = 0; i < count; i++) {
            await fetchJoke();
        }
    };

    const inputHandler = (e  : React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value);
        if(newCount > 0)
        {
            setJokesCount(newCount);
        }
    };
    useEffect(() => {
        if(!hasFetched.current)
        {
            hasFetched.current = true;
            fetchMultipleJokes(jokesCount);
        }
    });
    useEffect(()=>{
        fetchMultipleJokes(jokesCount);
    },[jokesCount])



    return (
        <div className="list-design">   
        <CInput
            type="number"
            name="howmuchjokes"
            design="input-design input-design-number"
            placeholder="How much jokes ?"
            onChange={inputHandler}
        />
            <div className="jokes-card-wrapper">
                {jokes  ?(
                    <>
                    {jokes.map((joke)=>{
                        return(
                            <>
                                <SingleJoke joke={joke}/> 
                            </>
                        )
                    })}
                    </>
                ):(
                    <div>Loading ... </div>
                )}
                </div>

            </div>

    );
}

export default List