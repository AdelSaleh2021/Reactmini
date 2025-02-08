import { useState } from "react"

export default function Joke(){
const [messages,setMessages]=useState(["a","b"]);


    return (
        <div>
            {messages.length>0 && <h1>you have {messages.length} unread messages!</h1>}
        </div>
    )
}


