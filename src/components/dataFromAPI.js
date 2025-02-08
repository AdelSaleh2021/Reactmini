import { useEffect, useState } from "react"

export default function DataFromAPI() {
const [data,setData]=useState({})
const [count,setCount]=useState(1)
useEffect(function(){
    fetch(`https://swapi.dev/api/people/${count}`)
     .then(result => result.json())
     .then(data1=>setData(data1))
},[count])

// 1- get data from API
//fetch("https://swapi.dev/api/people/1").then(result => result.json()).then(data1=>setData(data1))

// 2- save data to state
function hanleNext()
{
    console.log(count)
    setCount(value => (value + 1))
}
    return(
        <div> 
            <pre>
                {JSON.stringify(data,null,2)}
            </pre>
            <button onClick={hanleNext}>next</button>
        </div>

        
    )
}