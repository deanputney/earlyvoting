import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'

import './style.scss';

import voteAmericaLogo from '../images/vote-america-logo.png';
import Navbar from './navbar';

import { statePageUri } from '../lib/common';

class StateSelect extends Component {
	constructor(props) {
    super(props);
    this.state = {

    }; // initialise state
    this.data = props.data;

		// Make sure to bind handleChange or you can make use of arrow function

		this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const targetValue = e.target.value;

		// Then you can do whatever you want to do with the value
		window.location.href = targetValue;
  }

  render() {
  	return (
			<select onChange={ this.handleChange }>
			  <option>YOUR STATE</option>
	      {
	        this.data.allGoogleSheetVaApiDataRow.nodes.map(stateSelectOption)
	      }
			</select>
		);
  }
}

const stateSelectOption = (data) => {
	var statePage = statePageUri(data.fullStateName);

	return (
		<option value={ statePage }>{ data.fullStateName }</option>
	);
}

const StateSelectDiv = ({ data }) => (
	<React.Fragment>
		<p className="subtitle has-text-white is-size-3 is-hidden-mobile">
			I vote in
			<div class="select is-medium is-primary state-dropdown">
				<StateSelect data={ data } />
			</div>
			and I'm ready to get this over with!
		</p>

		<p className="subtitle has-text-white is-size-3 is-hidden-desktop">
			I vote in
			<div class="select is-medium is-primary state-dropdown">
				<StateSelect data={ data } />
			</div>
		</p>
	</React.Fragment>
)

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-halfheight">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								You can vote early in <span class="hilight">41 states</span>.
							</h1>

							<StaticQuery
							query={graphql`
								{
									allGoogleSheetVaApiDataRow {
									  nodes {
									  	stateSlug
									    fullStateName
									  }
									}
								}
							`}
							render={data => (
								<StateSelectDiv data={ data } />
							)}
							/>

						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
