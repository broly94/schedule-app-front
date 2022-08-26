import React from "react";
import Label from "./Label";

const Checkbox = ()=>{
    return(
        <div className="input-checkbox">
            <input type="checkbox" id="inputCheck" name="recordarUsuario"/>
            <Label text="Recordarme" htmlFor="inputCheck"/>
        </div>
    )
}

export default Checkbox;