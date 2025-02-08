import { useState } from 'react';

export default function YesNoQuestion()
{
     const [isGoing,setisGoint] = useState(false) 
       function changeMind(){
        setisGoint(prevstate => !prevstate);
      }
      return (
        <div className="App">
    
          <h1> should I do this MR. Adel?</h1>
          <div className="questionAnswer" onClick={changeMind} >
            <h2 >{ isGoing? "yes" : "no"}</h2>
          </div>
        
        </div>
      );
}