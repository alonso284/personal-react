import React from "react";
import Item from "./Item";
import Button from "./Button";

const List  = ({ items, remove }) => {
    return (
		<div>
			{items.map((i) => (
			<div>
				<Item key={i.id} item={i} />
				<Button name="remove" click={() => {remove(i.id)}} />
			</div>
			))}
		</div>
    );
};

export default List;
