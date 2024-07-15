import React, { useEffect, useState } from "react";
import "./SingleJoke.css";
import heart_red from "../../assets/heart_red.png";
import heart_white from "../../assets/heart_white.png";
import { ChuckNorrisJokePrev } from "../../Interfaces/ChuckNorrisJokes-interface";
import { useMyContext } from "../../app/ProviderContextComponent";

const SingleJoke: React.FC<ChuckNorrisJokePrev> = ({ joke }) => {
  const { state, addFavoriteJoke, removeFavoriteJoke} = useMyContext();
  const [image, setImage] = useState<any>(heart_white);

  useEffect(() => {
    console.log(joke.categories)
    const isFavorite = state.favorites.some((favJoke) => favJoke.id === joke.id);
    setImage(isFavorite ? heart_red : heart_white);
  }, [joke, state.favorites]);

  const handleClick = () => {
    if (image === heart_red) {
        let isFavorite = false;
        state.favorites.forEach((favJoke) => {
          if (favJoke.id === joke.id) {
            isFavorite = true;
            removeFavoriteJoke(favJoke.id);
          }
        });
    } else {
      addFavoriteJoke(joke);
      setImage(heart_red);
    }
  };

  return (
    <div className="single-joke-design">
      <div className="text-top">
        <div>{joke.icon_url && <img src={joke.icon_url} alt="Chuck Norris Icon" />}</div>
        <div>CHUCK NORRIS JOKE</div>
      </div>
      <div className="text-wrapper">{joke.value || "No joke available"}</div>
      <div className="bottom-wrapper">
          <div>
            {joke.categories.length > 0 &&
              <>
              <span>Category: </span> {joke.categories}
              </>
             }
          </div>
        {state.auth.token !== "" && 
            <div className="heart-wrapper-design" onClick={handleClick}>
              <img className="heart-design" src={image} alt="heart" />
            </div>
        }
      </div>
    </div>
  );
};

export default SingleJoke;
