import React from "react";
import "./SingleJoke.css"
import { ChuckNorrisJokePrev } from "../../Interfaces/ChuckNorrisJokes-interface";

const SingleJoke: React.FC<ChuckNorrisJokePrev> = ({ icon_url, id, value }) => {
    return (
        <div className="singleJoke-design">
            {icon_url && <img src={icon_url} alt="Chuck Norris Icon" />}
            <div>{value || "No joke available"}</div>
            {/* <div>ID: {id || "No ID available"}</div> */}
        </div>
    );
};

export default SingleJoke;