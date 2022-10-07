import App from "./App";
import { useState } from "react";
const Loading = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading( false), 3000);
    return (<>
        {loading ?  (<h1>En cours de chargement</h1>) : (<App/>)}
        </>
    )
}    

export default Loading;
