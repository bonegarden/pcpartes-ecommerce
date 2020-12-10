import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar () {
    return (
        <>
            <ul className = "navBar">
                <li>Cpu's</li>
                <li>Vga's</li>
                <li>Mobo's</li>
                <li>Psu's</li>                
            </ul>
            <CartWidget/>
        </> 
    );
}

export default NavBar;