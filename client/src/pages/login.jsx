import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ()=>{
    const [username, setUser] = useState('');
    const [passw, setPassw] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

   const usuario1 = {
        usrname1: "waldo",
        passwrd1: "bombaloko"
   }
   
   const usuario2 = {
    usrname: "nico",
    passwrd: "furro"
}
    const loginDone = ""

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="text">user</label>
                <input value={username} onChange={(e)=> setUser(e.target.value)} type="text" placeholder="Nombre de usuario" id="username" name="username"/>
                <label for="password">password</label>
                <input value={passw} onChange={(e)=> setPassw(e.target.value)} type="password" placeholder="Contrasena" id="password" name="password"/>
                <button type={"submit"} onClick={function () {
                    
                    if(usuario2.usrname == username && usuario2.passwrd == passw ){
                        console.log("lol");
                        window.location.href="/cashier";
                        
                    }
                    
                    if( usuario1.usrname1 == username && usuario1.passwrd1 == passw){
                        window.location.href="/cashier";
                    }
                    
                    
                }} >Ingresar</button> 
            </form>
            <button className="link-btn">No tienes una cuenta? Resgistrate</button>
        </div>
    )
}

export default Login;

