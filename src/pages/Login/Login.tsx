import CInput from "../../common/CInput/CInput";
import { UserCredentials } from "../../Interfaces/Login-interface";
import "./Login.css";
import { useEffect, useState} from "react";
import { LoginMe } from "../../services/login-api-calls";
import { useMyContext } from "../../app/ProviderContextComponent";
import { useNavigate } from "react-router";

const Login = () =>
{
    const { state, SetAuth } = useMyContext(); 
    const navigate = useNavigate();

  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState<string>();

  const inputHandler = (e  : React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    const {name, value} = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginFunction = async () => {

    LoginMe(credentials)
        .then(res => {
          SetAuth("token", res.token)
          navigate('/home')
          setMessage("Zalogowano");
        })
        .catch((error) => {
          setMessage("Login failed !")
          console.log(error
          
          )})
  };

  useEffect(()=>{

    console.log("STATE", state);
  },[state])

    return(
        <div className="login-design">
          <div className="login-wrapper-design">
            <div className="text-up">Login</div>
            <div className="inputs-wrapper-design">
              <CInput
                    type="text"
                    name="username"
                    design="input-design"
                    placeholder="Username"
                    onChange={inputHandler}
              />
              <br></br>

                <CInput
                    type="password"
                    name="password"
                    design="input-design"
                    placeholder="Password"
                    onChange={inputHandler}
              />
             <div className="text-message">{message}</div> 
             <button onClick={loginFunction} className="signin-design"> Sign in</button>
            </div>
          </div>

        </div>
    )

}

export default Login