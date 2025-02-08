// object state is solution when we have many inputs

import { useState } from "react"

export default function Form2(){
    const [inputs, setInputs]=useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly:true,
        marriage:"single",
        favoritColor:""

    })
    
    function handleChange (event){
        //const {name,value} = event.target // destructure 
        const {name,value, type,checked} = event.target
        setInputs(
            {
                ...inputs,
                //[event.target.name]:event.target.value it will becomes:
                //[name]:value,
                [name]: type==="checkbox"? checked : value,
            }
        )
    }

    console.log(inputs)
    function handleSubmit(event){
        event.preventDefault();
       // submitToAPI();
        console.log(inputs)
    }
    return(
        // controlled components
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="FirstName"
          onChange={handleChange} 
          name="firstName"
          value={inputs.firstName }  
          />
 <hr/>
        <input 
            type="text"
            placeholder="LastName"
          onChange={handleChange} 
          name="lastName"
          value={inputs.lastName}  
          />
           <hr/>
            <input 
            type="email"
            placeholder="email"
          onChange={handleChange} 
          name="email"
          value={inputs.email}  
          />
           <hr/>
          <textarea 
            
            placeholder="comments"
          onChange={handleChange} 
          name="comments"
          value={inputs.comments}  
          />
 <hr/>
        <input 
          type="checkbox"
          onChange={handleChange} 
          name="isFriendly"
          checked={inputs.isFriendly}
          id="isFriendly"  
          />
          <label htmlFor="isFriendly">are you friendly??</label>

          <hr/>

          <input 
          type="radio"
          id="married"
          name="marriage"
          value="married"
          onChange={handleChange}
          checked={inputs.marriage==="married"}
          />
          <label htmlFor="married">normal person</label>
          <br/>

          <input 
          type="radio"
          id="single"
          name="marriage"
          value="single"
          onChange={handleChange}
          checked={inputs.marriage==="single"}
          />
          <label htmlFor="single">may be clever</label>
          <br/>

          <input 
          type="radio"
          id="divorced"
          name="marriage"
          value="divorced"
          onChange={handleChange}
          checked={inputs.marriage==="divorced"}
          />
          <label htmlFor="divorced">may be dump</label>
          <hr/>
          <label htmlFor="favoritColor">اختر لونك المفضل</label>
        <select id="favoritColor"
                value={inputs.favoritColor}
                onChange={handleChange}
                name="favoritColor"
        >
             <option value="">اختر ...</option>
            <option value="black">الأسود</option>
            <option value="red">الأحمد</option>
            <option value="green">الأخضر</option>
        </select>

        <hr/>
        <input type="submit" value="send"/> 
        <button>send</button>
          
        </form>
    )
}