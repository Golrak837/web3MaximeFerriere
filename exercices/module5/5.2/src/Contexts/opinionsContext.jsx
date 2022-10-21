import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid';

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    
    const [Opinions, setOpinions] = useState([]);

    const addOpinion = (text) => {
        const Opinion = {
            id: uuidv4(),
            text: text,
            conteur: 0
        }

        setOpinions([...Opinions,Opinion]);
    }
    
    const upOpinions = (uuid) => {
        setOpinions(Opinions.map(opinion =>
            opinion.id === uuid?{...opinion, conteur: opinion.conteur+1}:opinion))

    }
    
    const getOrdonnedOpinion = () => {
        return Opinions.sort((a,b)=>{
            return b.conteur - a.conteur;
        })
    }
    
    const exposedValue = {
        addOpinion,
        upOpinions,
        getOrdonnedOpinion,
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}

