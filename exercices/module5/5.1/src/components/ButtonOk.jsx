import { useContext } from "react";
import { Context as countersContext } from "../contexts/countersContext";
const ButtonOk = () => {
    const{ok,increaseOk} = useContext(countersContext)
    return<div>
        <h3>Ok: {ok}</h3>
        <button onClick={increaseOk}>+1</button>
    </div> 
};

export default ButtonOk;
