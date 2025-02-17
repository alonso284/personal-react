import React from "react";
import { Link } from "react-router-dom";

const Header  = () => {
    return (
        <div>
            <h1>Header</h1>
			<nav>
				<Link to="/add">Add</Link>
				<br />
				<Link to="/items">Items</Link>
			</nav>
        </div>
    );
};

export default Header;
