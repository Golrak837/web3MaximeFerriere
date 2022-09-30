import Display from "./Display"
import Button from "./Button"
import { useState } from "react"
const App = () => {

  const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))
    
    
    const changeCount = (delta) => {
      let counter1= counter + parseInt(delta) 
      setCounter(counter1)
      localStorage.setItem("counter", JSON.stringify(counter1))
         
    }
    
  
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