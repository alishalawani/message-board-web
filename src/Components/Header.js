import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(props) {
	return (
		<header>
			<nav>
				<Link to='/' className='logo'>
					Message Board
				</Link>
				<Link to='/about' className='about'>
					About
				</Link>
			</nav>
		</header>
	);
}

export default Header;
