import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const LogIn = ({ login }) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			console.log("submit");
			if(!username || !password){
				alert("Please fill in both fields");
			}
			const isLogin = login(username, password);
			if(isLogin){
				setUsername("");
				setPassword("");
				navigate("/items");
			}
		}}>
			<Box display="flex" flexDirection="column">
				<TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
				<Button type="submit" variant="contained">Log In</Button>
			</Box>
		</form>

	)
}

 export default LogIn;
