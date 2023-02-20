import {ReactComponent as Logo} from './logo.svg';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
export default function Navbar()
{
    const[toggle,settoggle]=useState(false);
    const handleClick=()=>{
        settoggle(!toggle)
    }
    return (
<nav className='Navbar'>
    <div className='container'>
<div className='Logo'>
    <Logo/>
    <h1>Croncy</h1>
    <button className='Hamburg' onClick={handleClick}>
<GiHamburgerMenu />
</button>
</div>


<div className={toggle ? "Navbar-elements expanded" :"Navbar-elements"} >
<ul>
    <li>
        <NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contacts">Contact</NavLink></li>
</ul>
</div>
</div>
 </nav>

    )
}