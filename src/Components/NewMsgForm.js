import React, { useState } from 'react';
import './NewMsgForm.css';
function NewMsgForm({ setMessages, subscriptionObj }) {
	const url = 'https://message-board-db.herokuapp.com/api/messages';
	const pushUrl = 'https://message-board-db.herokuapp.com/subscribe';
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');

	function sendPush() {
		console.log('Sending Push...');
		fetch(pushUrl, {
			method: 'POST',
			body: JSON.stringify(subscriptionObj),
			headers: {
				'content-type': 'application/json',
			},
		}).catch(console.error)
		console.log('Push Sent...');
	}

	function clearInputs() {
		setMessage('');
		setSubject('');
	}
	const handleSend = (event) => {
		event.preventDefault();
		if (message && subject) {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ subject: subject, message: message }),
			})
				.then((res) => res.json())
				.then((res) => {
					clearInputs();
					setMessages([...res]);
					sendPush()
				});
		}
	};
	const handleChange = (event) => {
		event.preventDefault();
		if (event.target.name === 'subject') {
			setSubject(event.target.value);
		} else {
			setMessage(event.target.value);
		}
	};
	return (
		<form className='form' onSubmit={handleSend}>
			<label htmlFor='subject'> Subject:</label>
			<input
				type='text'
				name='subject'
				id='subject'
				value={subject}
				className='input subjectInput'
				onChange={handleChange}
			/>
			<label htmlFor='message'> Message:</label>
			<input
				type='text'
				name='message'
				id='message'
				value={message}
				className='input messageInput'
				onChange={handleChange}
			/>
			<div className='buttonsContainer'>
				<input type='submit' value='Submit' className='submitButton' />{' '}
				<button className='submitButton' onClick={clearInputs}>Clear</button>
			</div>
		</form>
	);
}

export default NewMsgForm;
