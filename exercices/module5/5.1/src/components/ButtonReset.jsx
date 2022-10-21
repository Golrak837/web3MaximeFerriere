import { useContext } from "react";
import { Context as countersContext } from "../contexts/countersContext";
const ButtonReset = () => {
    const{resetAll} = useContext(countersContext)
    return <div>
        <h3>Reset all</h3>
        <button onClick={resetAll}>Tout reset</button>
    </div>
};

export default ButtonReset;
