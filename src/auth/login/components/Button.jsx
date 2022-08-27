import React from "react";

const Button = ({type,text,handleClick})=>{
    return(
        <button type={type} onClick={()=>handleClick()}  className="btn-primary">{text}</button>
    )
}

export default Button;