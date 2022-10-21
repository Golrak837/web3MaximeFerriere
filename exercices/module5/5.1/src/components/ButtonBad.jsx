import { useContext } from "react";
import { Context as countersContext } from "../contexts/countersContext";
const ButtonBad = () => {
    const{bad,increaseBad} = useContext(countersContext)
    return <div>
        <h3>Bad: {bad}</h3>
        <button onClick={increaseBad}>+1</button>
    </div>
};

export default ButtonBad;
