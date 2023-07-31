import React from 'react';
import logo from './Logo .svg';

function Nav(){
    return(
        <nav>
            <img src={logo} alt="Logo"></img>
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/'>ABOUT</a></li>
                <li><a href='/'>MENU</a></li>
                <li><a href='/'>RESERVATIONS</a></li>
                <li><a href='/'>ORDER ONLINE</a></li>
                <li><a href='/'>LOGIN</a></li>
            </ul>
        </nav>
    )
}

export default Nav;