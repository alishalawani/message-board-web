import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
function Header(props) {
    return (
			<header>
				<img
					src='pixelntexel.png'
                    alt='pnt logo'
                    className='logo'
				/>
                <Link to='/about' className='about'>About</Link>
			</header>
		);
}

export default Header;