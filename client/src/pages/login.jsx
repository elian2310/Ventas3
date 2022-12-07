import React, { useState } from "react";

export const Login = ()=>{
    const [username, setUser] = useState('');
    const [passw, setPassw] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="text">user</label>
                <input value={username} onChange={(e)=> setUser(e.target.value)} type="text" placeholder="Nombre de usuario" id="username" name="username"/>
                <label for="password">password</label>
                <input value={passw} onChange={(e)=> setPassw(e.target.value)} type="password" placeholder="Contrasena" id="password" name="password"/>
                <button type="submit">Ingresar</button>
            </form>
            <button className="link-btn">No tienes una cuenta? Resgistrate</button>
        </div>
    )
}