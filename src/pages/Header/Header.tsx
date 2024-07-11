
import Surfer from "../../common/Surfer/Surfer";
import "./Header.css";
import { useMyContext } from "../../app/ProviderContextComponent";
import { useEffect } from "react";


const Header = () =>
{
    const { state, SetAuth } = useMyContext(); 

    useEffect(()=>{

        console.log(state);
    },[state])
    return(
        <div className="header-design">
             {state.auth.token === '' ? (
                <Surfer
                path="/login"
                destiny="Login"
                className="surfer-design"
                />
            ) : 
            <div className='navi-design' onClick={()=>SetAuth("token", "")}>
                <Surfer path="/" destiny="log out" className="surfer-design" />
            </div>
            }
           
             <Surfer
                path="/home"
                destiny="Home"
                className="surfer-design"
            />
             <Surfer
                path="/categories"
                destiny="Categories"
                className="surfer-design"
            />
            <Surfer
                path="/searchforjokes"
                destiny="Find a joke"
                className="surfer-design"
            />

            {state.auth.token !== "" ? (
                 <Surfer
                 path="/list"
                 destiny="Jokes list"
                 className="surfer-design"
             />
            ) : null}
           

        </div>
    )

}

export default Header