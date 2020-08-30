import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import StateGantt from './state-gantt';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
    <StateGantt />
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
