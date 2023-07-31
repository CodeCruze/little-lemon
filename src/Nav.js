import React from 'react';
import logo from './Logo .svg';

function Nav(){
    return(
        <nav>
            <img src={logo} alt="Logo"></img>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}

export default Nav;