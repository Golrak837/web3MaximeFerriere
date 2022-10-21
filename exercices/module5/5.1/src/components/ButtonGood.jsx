import { useContext } from "react";
import { Context as countersContext } from "../contexts/countersContext";
const ButtonGood = () => {
    const{good,increaseGood} = useContext(countersContext)
    return<div>
        <h3>Good: {good}</h3> 
        <button onClick={increaseGood}>+1</button>
    </div>
};

export default ButtonGood;
