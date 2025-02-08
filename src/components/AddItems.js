// useState : state is array

import { useState } from "react";

export default function AddItems()
{
    const [thingsArray,setThingsArray] =useState(["thing1","thing2"]);

    // to get new array from old array we spread it and add one more item
    // we use literal template not just add text
    function addItem(){
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray,`thing${prevThingsArray.length+1}`]
        }
        )

    }
    //console.log(thingsArray)

    const thingsElements = thingsArray.map(item => <p key={item}>{item}</p>)
   // console.log(thingsElements);
    return (
        <div >
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
        // thingsArray.map(item => <p key={item}>{item}</p>)
    )
}