import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Telefony</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Sklep</Link></li>
                        <li><Link to="/cart">Koszyk</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;