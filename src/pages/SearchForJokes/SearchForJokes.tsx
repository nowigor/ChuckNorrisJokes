import { useState } from "react";
import CInput from "../../common/CInput/CInput";
import "./SearchForJokes.css";

const SearchForJokes = () =>{

    const[search, setSearch] = useState<string>("");


    const inputHandler = (e  : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };

    return(
        <div className="search-design">
            <CInput
                type="text"
                name="Search text in jokes"
                design="input-design"
                placeholder="Free text search"
                onChange={inputHandler}
            />
            {search}
            </div>
)}


export default SearchForJokes;