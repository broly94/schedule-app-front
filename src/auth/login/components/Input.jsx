import React from "react";

const Input = ({type,placeholder,id,name,handleChange})=>{
    return(
        <input type={type} placeholder={placeholder} id={id} name={name} onChange={(e)=>handleChange(e.target.name, e.target.value)} className="input-field"/>
    )
}

export default Input;