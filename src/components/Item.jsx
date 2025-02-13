import React from "react";

const Item  = ({ item  }) => {
    return (
		<ul>
			<li>
				<p>{item.name}</p>
			</li>
			<li>
				<p>{item.price}</p>
			</li>
		</ul>
    );
};

export default Item;
