import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import List from './components/List';
import Add from './components/Add';
import ResponsiveAppBar from './components/AppBar';
import LogIn from './pages/LogIn';
import Home from './pages/Home';

function App() {
	// let [count, setCount] = useState(0);
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
	let remove = (id) => {
		let newItems = items.filter(item => item.id !== id);
		items = addItem(newItems);
	}
	let [session, setSession] = useState(null);
	let login = (username, password) => {
		console.log("login", username, password);
		if(username === "admin" && password === "admin"){
			setSession({ username: username });
			return true;
		}
		else{
			alert("Invalid username or password");
			return false;
		}
	}
	let logout = () => {
		setSession(null);
	}

	
	return <div>

		<BrowserRouter>
			{ session && <ResponsiveAppBar setLogOut={logout}/>}
			<Header />
			<Routes>
				<Route path="/login" element={<LogIn login={login}/>} />
				{ session && <Route path="/add" element={<Add add={add} />} /> }
				{ session && <Route path="/items" element={<List items={items} remove={remove}/>} /> }
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
		{ /* 
		<h1>{count}</h1>
		<Button name="decrease"	click={() => {count = setCount(count - 1)}}	/>
		<Button name="increase"	click={() => {count = setCount(count + 1)}}	/>
		<Button name="mensaje"	click={() => {alert("Hello, world")}}	/>
		<Add add={add}/> 
		*/ }
	</div>
}

export default App;
