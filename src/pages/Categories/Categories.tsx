import { useEffect, useState } from "react";
import { ChuckNorrisJoke, ChuckNorrisJokesCategories } from "../../Interfaces/ChuckNorrisJokes-interface";
import { getChuckNorriesJokeWithCategory, getChukNorrisJokesCategories } from "../../services/chuck-norris-api-calls";
import "./Categories.css";
import SingleJoke from "../../common/SingleJoke/SingleJoke";
const Categories = () =>{
    const [categories, setCategories] = useState<ChuckNorrisJokesCategories>([]);
    const [joke, setJoke] = useState<ChuckNorrisJoke>();

    useEffect(()=>{
        const fetchCategories = async () => {
            try {
                const result = await getChukNorrisJokesCategories();
                setCategories(result);
                console.log(categories);
            } catch (error) {
                console.log("Err: ", error);
            }
        }
        if(categories.length === 0)
        {
            fetchCategories();
            console.log(categories.length)
        }
    },[categories])

    const onClick = async (category: string) =>{
        try
        {
            const result = await getChuckNorriesJokeWithCategory(category);
            console.log(result);
            setJoke(result);
        }catch(error){
            console.log("Err: ", error)
        }
    }

    return(
        <div className="categories-design">
        {categories && categories.length > 0 ?  (
                        <ul>
                            {categories.map((category) => (
                                <li key={category} onClick={() => onClick(category)}>{category}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Loading categories...</p>
                    )} 

        {joke && 
            <SingleJoke icon_url={joke.icon_url} id={joke.id} value={joke.value}/> 
        }
        </div>
    )

}

export default Categories;