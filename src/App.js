import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import List from './components/List';
import Add from './components/Add';

function App() {
	let [count, setCount] = useState(0);
	let [items, addItem] = useState([
		{ id: 1, name: "item1", price: 1 },
		{ id: 2, name: "item2", price: 2 },
		{ id: 3, name: "item3", price: 3 },
	])
	let add = (name, price) => {
		let newItems = [...items];
		newItems.push({ id: newItems.length+1, name: name, price: price });
		items = addItem(newItems);
	}
	return <div>
		<Header />
		<h1>{count}</h1>
		<Button name="decrease"	click={() => {count = setCount(count - 1)}}	/>
		<Button name="increase"	click={() => {count = setCount(count + 1)}}	/>
		<Button name="mensaje"	click={() => {alert("Hello, world")}}	/>
		<List items={items} />
		<Add add={add}/>
		<Footer />
	</div>
}

export default App;
