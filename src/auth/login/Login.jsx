import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import Title from './components/Title'
import Label from './components/Label'
import Input from './components/Input'
import Checkbox from "./components/Checkbox"
import Link from './components/Link'
import Button from './components/Button'

export const Login = () => {

  const [user, setUser]= useState("")
  const [password, setPassword]= useState("")

  function handleChange(name,value){
    name === "nombreUsuario" ? setUser(value) : setPassword(value)
  }

  function consoleLog(){console.log("funciona")}

  return (
    <div className='form-login'>
      <Title text="Login"/>
      <Label text="Ingrese su email" htmlFor="inputText"/>
      <div>
      <FaUser/>
      <Input type="text" placeholder="Nombre de usuario" id="inputText" name="nombreUsuario" handleChange={handleChange}/>
      </div>
      <Label text="Ingrese su contraseña" htmlFor="inputPassword"/>
      <div>
      <FaLock/>
      <Input type="password" placeholder="Contraseña" id="inputPassword" name="contrasenaUsuario" handleChange={handleChange}/>
      </div>
      <Checkbox/>
      <Link href="#" text="Olvidaste tu Contraseña?"/>
      <Button type="submit" text="Ingresar" handleClick={consoleLog}/>
    </div>
  )
}
