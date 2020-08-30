import React from 'react';

import './style.scss';
import voteAmericaLogo from '../images/vote-america-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://www.voteamerica.com"
					>
						<img src={voteAmericaLogo} alt="vote-america-logo"/>
					</a>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
