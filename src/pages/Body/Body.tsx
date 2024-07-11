import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import "./Body.css";
import List from "../List/List";
import { useMyContext } from "../../app/ProviderContextComponent";
import Categories from "../Categories/Categories";
import SearchForJokes from "../SearchForJokes/SearchForJokes";

const Body = () =>
{
    const { state} = useMyContext(); 
    
    return(
        <div className="body-design">
            <Routes>
                <Route path="*" element={<Navigate to={"/"} replace/>} />
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path ="/categories" element={<Categories/>}></Route> 
                <Route path ="/searchforjokes" element={<SearchForJokes/>}></Route>
                
                {state.auth.token !== "" ? (
                    <>
                        <Route path="/list" element={<List/>}></Route>
                        {/* <Route path="/admin" element={<Admin/>}></Route>
                        <Route path="/details" element={<Details/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route> */}
                    </>
                ) : null}
            </Routes>
        </div>
    )

}

export default Body