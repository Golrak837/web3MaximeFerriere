import { useContext } from "react";
import { Context as opinionsContext } from "../Contexts/opinionsContext";
import { useState } from "react";

const AddOpinion = () => {
    const {addOpinion} =useContext(opinionsContext)
    const [newNumber, setNumber] = useState("");
    const add = (e) => {
        e.preventDefault();
        addOpinion(newNumber)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
      };

    return <form onSubmit={add}>
        <input onChange={handleNumberChange} />
        <button type="submit">add opinion</button>
    </form>
}    
export default AddOpinion;