import { useState } from "react"

export default function LoginForm(){
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:"",

         
    })
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormData(prevFormData =>({
            ...prevFormData,
            [name]:type === "checkbox"? checked : value
        }))
        console.log(formData)
    }
    function handleSubmit(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("thank you for sign up")
        }
        else
        {
            console.log("password and confirm do not match")
            return
        }
        if(formData.okayToEmail){
            console.log("thank you for participating in emails newspaper")
        }
    }
    return(
        <div>
            <h1> hi from login form</h1>
            <form className="form" onSubmit={handleSubmit}
            >
                <input
                name="email"
                type="email"
                placeholder="email"
                className="form--input"
                onChange={handleChange}
                value={formData.email}
                />
                <hr/>
                <input
                name="password"
                type="password"
                placeholder="password"
                className="form--input"
                onChange={handleChange}
                value={formData.password}
                />
                <hr/> 
                <input
                type="password"
                placeholder="confirm password"
                className="form--input"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                />
                <div>
                <input
                id="okayToEmail"
                type="checkbox"
                placeholder="okayToEmail"
                className="form--input"
                name="okayToEmail"
                onChange={handleChange}
                checked={formData.okayToEmail}
                />  
                <label htmlFor="okayToEmail">are you ok to send emails to you?</label>
                </div>
                <button>send</button>

            </form>
        </div>
    )
}