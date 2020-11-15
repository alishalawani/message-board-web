import React from 'react';
import './MessageBoard.css';
import moment from 'moment';
function MessageBoard({ messages, setMessages }) {
	return (
		<div className='container'>
            <a className='newMessageButton'>+ New Message</a>
			<ul className='scrollable'>
				{messages ? (
					messages.map((message, index) => {
						return (
							<li className='message-block' key={index}>
								<p className='time'>
									{moment(message['created_at']).startOf('hour').fromNow()}
								</p>
								<p className='subject'>{message.subject}</p>
								<p className='message'>{message.message}</p>
							</li>
						);
					})
				) : (
					<li>
						<p>Messages loading...</p>
					</li>
				)}
			</ul>
		</div>
	);
}

export default MessageBoard;
