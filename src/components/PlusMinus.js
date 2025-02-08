// here we pass state as props

import { useState } from "react";
import PlusMinusCard from './PlusMinusCard';

export default function PlusMinus()
{
    console.log("PlusMinus component rendered")
    const [count,setCount] = useState(0);
    function add()
    {
        setCount(prev => prev +1);
    }
    function minus()
    { setCount(prev => prev -1)}
    
    return(
        <div>
            <PlusMinusCard number={count}/>
            <button onClick={add}>add</button>
            <button onClick={minus}>minus</button>
        </div>
    )
}