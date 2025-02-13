import React from "react";
import { useState } from "react";
import Button from "./Button";

const Add  = ({ add }) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
    return (
		<div>
			<input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
			<input type="number" id="price" onChange={(e) => setPrice(e.target.value)}/>
			<Button name="Add" click={() => {
				add(name, price);
			}}/>
		</div>
    );
};

export default Add;
