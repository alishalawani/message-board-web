import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Header from './Components/Header';
import MessageBoard from './Components/MessageBoard';
import About from './Components/About';
function App() {
	const url = 'https://message-board-db.herokuapp.com/api/messages';
	const [messages, setMessages] = useState([]);
	const [subscriptionObj, setSubscriptionObj] = useState({});
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

	// Service worker and push notification setup
	const publicVapidKey =
		'BJEoexrZhPFrUHqDVSXFB5xkGb7X0pNg7knp-3okSNSD4at2j1wIgyyRKgQ50NroSvUnrBz0yQyASad3x3gGODE';

	//check if you are able to use service worker
	if ('serviceWorker' in navigator) {
		send().catch((err) => console.error(err));
	}

	//register service worker, Register Push, Send Push
	async function send() {
		//register service worker
		console.log('Registering service worker...');
		const register = await navigator.serviceWorker.register('/worker.js', {
			scope: './',
		});

		//register push
		console.log('Register Push...');
		const subscription = await register.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
		});
		setSubscriptionObj(subscription);
	}

	function urlBase64ToUint8Array(base64String) {
		const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
		const base64 = (base64String + padding)
			.replace(/-/g, '+')
			.replace(/_/g, '/');

		const rawData = window.atob(base64);
		const outputArray = new Uint8Array(rawData.length);

		for (let i = 0; i < rawData.length; ++i) {
			outputArray[i] = rawData.charCodeAt(i);
		}
		return outputArray;
	} //end of service worker and push notification setup

	return (
		<div>
			<Header />

			<Route
				path='/'
				exact
				render={() => {
					return (
						<MessageBoard
							messages={messages}
							setMessages={setMessages}
							subscriptionObj={subscriptionObj}
						/>
					);
				}}
			/>
			<Route path='/about' component={About} />
		</div>
	);
}

export default App;
