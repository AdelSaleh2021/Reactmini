import { useState } from "react"

export default function AllBoxesBox(props)
{
    const [myState,setMyState]=useState(props.darkMode)


    
    function toggleState(){
        setMyState(prev => !prev)

    }
    
    

    const styles={
        backgroundColor: myState? "#222" :"#ccc" 
    }
   // console.log(props)
    return(
        <div className="box" style={styles} key={props.id} onClick={toggleState}></div>
    )
}