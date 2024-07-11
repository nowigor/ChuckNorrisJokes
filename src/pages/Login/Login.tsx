import CInput from "../../common/CInput/CInput";
import { UserCredentials } from "../../Interfaces/Login-interface";
import "./Login.css";
import { useEffect, useState} from "react";
import { LoginMe } from "../../services/login-api-calls";
import { useMyContext } from "../../app/ProviderContextComponent";

const Login = () =>
{
    const { state, SetAuth } = useMyContext(); 

  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const inputHandler = (e  : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginFunction = async () => {

    console.log("Username: ", credentials.username);
    console.log("Password: ", credentials.password);
    LoginMe(credentials)
        .then(res => {
          SetAuth("token", res.token)
        })
        .catch(error => console.log(error))
  };

  useEffect(()=>{

    console.log(state);
  },[state])

    return(
        <div className="login-design">
           <CInput
                type="text"
                name="username"
                design="input-design"
                placeholder="Username"
                onChange={inputHandler}
           />
           {credentials.username}

            <CInput
                type="password"
                name="password"
                design="input-design"
                placeholder="Password"
                onChange={inputHandler}
           />
           {credentials.password}
           <button onClick={loginFunction}> Login</button>
        </div>
    )

}

export default Login