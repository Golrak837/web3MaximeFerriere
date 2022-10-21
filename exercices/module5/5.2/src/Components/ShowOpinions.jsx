import { useContext } from "react";
import { Context as opinionsContext } from "../Contexts/opinionsContext";
import ButtonOpinions from "./ButtonOpinions";

const ShowOpinions = () => {
    const {getOrdonnedOpinion} = useContext(opinionsContext)

    return  <div>{getOrdonnedOpinion().map((opinion) => (
        <div>
            <h3>Opinion: {opinion.text} <br/> Vote: {opinion.conteur}  <ButtonOpinions uuid={opinion.id}/></h3> 
        </div>))
                }

        </div>    
}  
export default ShowOpinions;  