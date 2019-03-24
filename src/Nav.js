import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

export default Nav =>
<div>
    <nav className='menu'>
        <ul className='menu__options'>
            <li className='menu__option'>
                <NavLink className='menu__link' to='/'>Discover</NavLink>
            </li>
            <li className='menu__option'>
                <NavLink className='menu__link' to='/search'>Search</NavLink>
            </li>
            <li className='menu__option'>
                <NavLink className='menu__link' to='/collections'>Collections</NavLink>
            </li>
        </ul>
    </nav>
</div>