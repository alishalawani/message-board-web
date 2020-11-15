import React from 'react';

function MessageBoard(props) {
    return (
			<div>
				{messages ? (
					messages.map((message, index) => {
						return (
							<li style={{ width: '90%' }} key={index}>
								<p>
									{moment(message['created_at']).startOf('hour').fromNow()}
								</p>
								<p>{message.subject}</p>
								<p>{message.message}</p>
							</li>
						);
					})
				) : (
					<p>Messages loading...</p>
				)}
			</div>
		);
}

export default MessageBoard;