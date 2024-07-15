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
                        <div className="list-wrapper-design">
                            {categories.map((category) => (
                                <div className="list-element" key={category} onClick={() => onClick(category)}>{category}</div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading categories...</p>
                    )} 
        <div className="mt-40">
            {joke && 
                <SingleJoke joke={joke}/> 
            }
            </div>
        </div>

    )

}

export default Categories;