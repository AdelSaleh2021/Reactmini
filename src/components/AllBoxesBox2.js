// no derived state here. the state is in the upper component

//import { useState } from "react"

export default function AllBoxesBox2(props)
{
    //const [myState,setMyState]=useState(props.darkMode)


    
   
    
    

    const styles={
        backgroundColor: props.darkMode? "#222222" :"#cccccc" 
    }
   
    return(
        //<div className="box" style={styles} onClick={props.handleClick(props.id)}></div>
        <div className="box" style={styles} onClick={props.handleClick}></div>
    )
}