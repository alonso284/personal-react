import React from "react";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Add  = ({ add }) => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
    return (
		<div>
			<input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
			<input type="number" id="price" onChange={(e) => setPrice(e.target.value)}/>
			<Button name="Add" click={() => {
				add(name, price);
				navigate("/items");
			}}/>
		</div>
    );
};

export default Add;
