import Display from "./Display"
import Button from "./Button"
import { useState } from "react"
const App = () => {
    const [ counter, setCounter ] = useState(0)
    const changeCount = (delta) => setCounter(counter + parseInt(delta))
    
  
    return (
      <div>
        <Display counter={counter}/>
        <Button 
            changeCount={changeCount}
            text='plus'
            delta='5'
             
        />      
        <Button        
            changeCount={changeCount}        
            text='zero'
            delta={-counter}      
        />           
        <Button        
            changeCount={changeCount}
            text='minus'
            delta='-128'      
        />               
      </div>
    )
  }

  export default App;