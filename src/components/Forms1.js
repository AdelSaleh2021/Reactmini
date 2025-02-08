import { useState } from "react"
// this is ok when inputs is 3 or less each one has it's own state
export default function Form1(){
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    function handleFirstNameChange (event){
        setFirstName(event.target.value)
    }

    function handleLastNameChange (event){
        setLastName(event.target.value)
        }


    console.log(firstName,lastName)
    
    return(
        <form>
            <input 
            type="text"
            placeholder="FirstName"
          onChange={handleFirstNameChange}  />

        <input 
            type="text"
            placeholder="LastName"
          onChange={handleLastNameChange}  />
        </form>
    )
}