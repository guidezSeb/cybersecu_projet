import React from 'react';
import './authentification.css';

export default class authentification extends React.Component{
    render(){
        return(
                <form class="formAuth">  
                    <div class="container">   
                        <label>Username : </label>   
                        <input type="text" placeholder="Enter Username" name="username" required/>  
                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" required/>  
                        <button type="submit">Login</button>   
                        <input type="checkbox"/> Remember me   
                        <button type="button" class="cancelbtn"> Cancel</button>   
                        {/* Forgot <a href="#"> password? </a>    */}
                    </div>   
                </form>   
        )}
}