import React from 'react';

import './style.scss';

import voteAmericaLogo from '../images/vote-america-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-halfheight">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								You can vote early in <span class="hilight">38 states</span>.
							</h1>
							<p className="subtitle has-text-white is-size-3">
								I live in
								<div class="select is-medium is-primary state-dropdown">
								  <select>
								    <option>YOUR STATE</option>
								    <option>With options</option>
								  </select>
								</div>
								and I'm ready to get this over with!
							</p>


						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
