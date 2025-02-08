import { useState } from "react"
import boxes from './AllBoxesData';
import AllBoxesBox from "./AllBoxesBox";
import AllBoxesBox2 from "./AllBoxesBox2";


export default function AllBoxesContainer(props) {

    const [squares, setSquares] = useState(boxes)

    //const styles={
    //   backgroundColor:props.darkMode? "#222" :"#ccc",
    // }

    function toggleState(vv) {
       //this is more declarative way
        setSquares(
            prevSequares => {
                        return prevSequares.map(oneSquare=>{
                                  return  oneSquare.id===vv?{...oneSquare,on:!oneSquare.on}: oneSquare
                                }
                            )
            }
        )
    }
            // imperative mode?????? we have to change

            // const newSequares = [];
            // for (let i = 0; i < prevSequares.length; i++) {
            //     const currentSquare = prevSequares[i];
            //     if (currentSquare.id === vv)
            //          {
            //             const updatedSquare = { ...currentSquare, on: !currentSquare.on }

            //         newSequares.push(updatedSquare)
                 
            //     }
            //     else {
            //         newSequares.push(currentSquare)
                  
            //     }
            // }
            //console.log(prevSequares)
           // console.log(newSequares)
           


            //return newSequares;
       // }



    
    // console.log(boxes)
    const squareElements = squares.map(
        item => (
           // <AllBoxesBox2 darkMode={item.on} key={item.id} id={item.id} handleClick={toggleState} />
           <AllBoxesBox2 darkMode={item.on} key={item.id}  handleClick={()=>{toggleState(item.id)}} />
           
            //  <AllBoxesBox darkMode={item.on} key={item.id} id={item.id}/> 
            //<div className="box" style={styles} key={square.id}></div>) 
        ))

    return (
        <main>
            <h1> All Boxes will be rendered here</h1>
            <div>
                {squareElements}
            </div>
        </main>
    )
}