import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
}

export default Header;