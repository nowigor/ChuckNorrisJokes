import { CInputInt } from "../../Interfaces/CInput-interface"

const CInput: React.FC<CInputInt> = ({type, name, design, placeholder, onChange}) => {

    return (
        <>
            <input 
                type={type}
                name={name}
                className={design}
                placeholder={placeholder}
                onChange={(e)=> onChange(e)}
            />
        </>
        
    )
}

export default CInput