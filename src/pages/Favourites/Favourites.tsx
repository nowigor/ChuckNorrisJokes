import "./Favourites.css"
import { useEffect} from "react";
import { useMyContext } from "../../app/ProviderContextComponent";
import SingleJoke from "../../common/SingleJoke/SingleJoke";

const Favorites = () =>{

    const { state, addFavoriteJoke} = useMyContext(); 

    useEffect(()=>{

    },[state])
    return(
        <div className="favourites-design">
            <div className="text-favourites">Your's favourites jokes list: </div>
            <div className="jokes-card-wrapper">
            {state &&
                state.favorites.map((joke)=>{
                    return(
                        <SingleJoke joke={joke}/>
                    )
                })
            } 
            </div>
        </div>  
    )
}

export default Favorites