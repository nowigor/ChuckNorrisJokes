
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

    const logoutHandle = () => {
        const confirmation = window.confirm("Are you sure you want to log out?");
        if (confirmation) {
            SetAuth("token", "");
        }
    };
    return(
        <div className="header-design ">
           
            <div className="buttons-wrapper">

                <div className="vertical-line"></div>
                    <Surfer
                    path="/home"
                    destiny="Home"
                    className="surfer-design before-login"
                />
                <div className="vertical-line"></div>
                {state.auth.token === '' &&
                <>
                    <Surfer
                    path="/login"
                    destiny="Login"
                    className="surfer-design before-login"
                    />
                    <div className="vertical-line"></div>
                </>
                    
                }


                {state.auth.token !== "" ? (
                    <>
                        <Surfer
                            path="/categories"
                            destiny="Categories"
                            className="surfer-design"
                        />
                    <div className="vertical-line"></div>
                        

                        <Surfer
                            path="/searchforjokes"
                            destiny="Find a joke"
                            className="surfer-design"
                        />
                    <div className="vertical-line"></div>

                        <Surfer
                            path="/favourites"
                            destiny="Favourites"
                            className="surfer-design"
                    />
                    <div className="vertical-line"></div>

                    <Surfer
                            path="/list"
                            destiny="Jokes list"
                            className="surfer-design"
                        />
                    <div className="vertical-line"></div>
                        
                    <div className='surfer-design' onClick={logoutHandle}>
                    <Surfer path="/" destiny="Log out" className="surfer-design" />
                    </div>
                    <div className="vertical-line"></div>

                    </>
                ) : null}
            
           </div>
        </div>
    )

}

export default Header