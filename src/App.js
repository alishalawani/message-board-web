import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Header from './Components/Header';
import MessageBoard from './Components/MessageBoard';
import About from './Components/About';
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
		<Header/>
    
    <Route path='/' exact render={()=>{
 return <MessageBoard messages={messages} setMessages={setMessages}/>
    }}/>
    <Route path='/about' component={About}/>
		</div>
	);
}

export default App;
