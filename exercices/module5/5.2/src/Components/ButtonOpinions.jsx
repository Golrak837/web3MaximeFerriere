import { useContext } from "react";
import { Context as opinionsContext } from "../Contexts/opinionsContext";

const ButtonOpinions = (props) => {
    const{upOpinions} = useContext(opinionsContext);
    const vote = () => {
        upOpinions(props.uuid)
    }
    return <button onClick={vote}>Vote</button>
}  

export default ButtonOpinions;