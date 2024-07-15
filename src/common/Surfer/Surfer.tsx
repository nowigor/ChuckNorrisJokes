import './Surfer.css'
import { useNavigate } from 'react-router-dom'
import { SurferInt} from '../../Interfaces/Surfer-interface';

const Surfer: React.FC<SurferInt> = ({path, destiny, className = " "}) =>
{
    const navigate = useNavigate();

    const clickHanlder = () =>{
        navigate(path);
        className = className + " selected";
        console.log(className);
    }
    return(
        <>
            <div className={className} onClick={clickHanlder}>
                {destiny}
            </div>
        </>
    )
}

export default Surfer