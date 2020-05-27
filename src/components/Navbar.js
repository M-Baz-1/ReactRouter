import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            
            <ul>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>

                <Link to="/aboutus">
                    <li>About Us</li>
                </Link>
                <li>Basket:{props.item}</li>
            </ul>
        </nav>
    )
}


