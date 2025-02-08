// here the state is object
// when we spread it and replace property. it's not syntax error. because in javascript it take the last time
// we set a property in an object
import { useState } from "react";
import CardStateDetail from './CardStateDetail'

export default function CardState()
{
    const [contact,setContact]= useState({
        firstName: "adel",
        lastName: "saleh",
        phone:"0937724587",
        email:"adelsalehmail@gmail.com",
        isFavorite:true
    })

    function toggoleFavorite(){
        // in single line to return object we use {{}} because first one for opening function the seccond to return object
        setContact(prev =>{
            return {
                ... prev,
                isFavorite:!prev.isFavorite
            }
        })
    }

    return(
        <div>
            <p>name: {contact.firstName}</p>
            <p onClick={toggoleFavorite}>last name: {contact.lastName}</p>
            <p>phone: {contact.phone}</p>
            <p>email: {contact.email}</p>
            <CardStateDetail filled ={contact.isFavorite} handleClick={toggoleFavorite}></CardStateDetail>
            
        </div>
    )
}