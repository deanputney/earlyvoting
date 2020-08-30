import React from 'react';

import './style.scss';

import voteAmericaLogo from '../images/vote-america-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								You can vote early in 38 states.
							</h1>
							<p className="subtitle has-text-white is-size-3">
								Here's how and when.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
