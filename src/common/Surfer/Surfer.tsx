import './Surfer.css'
import { useNavigate } from 'react-router-dom'
import { SurferInt} from '../../Interfaces/Surfer-interface';

const Surfer: React.FC<SurferInt> = ({path, destiny, className = " "}) =>
{
    const navigate = useNavigate();
    return(
        <>
            <div className={className} onClick={()=>navigate(path)}>
                {destiny}
            </div>
        </>
    )
}

export default Surfer