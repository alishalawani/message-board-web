import React, { useState, useEffect } from 'react';
import MessageBoard from './Components/MessageBoard';

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
		<div>
			<header>
				
			</header>
    <MessageBoard messages={messages} setMessages={setMessages}/>
		</div>
	);
}

export default App;
