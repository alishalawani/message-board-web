import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const url = 'https://message-board-db.herokuapp.com/api/messages';
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setMessages([...res]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className='App'>
			<header className='App-header'>
				
			</header>

		</div>
	);
}

export default App;
