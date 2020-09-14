import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import StateGantt from './state-gantt';
import SiteDescription from './site-description';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />

    <div>
      <section className="section">
        <div className="container">
          <SiteDescription />

          <StateGantt />
        </div>
      </section>
    </div>

		<Footer />
	</div>
);

export default Layout;
