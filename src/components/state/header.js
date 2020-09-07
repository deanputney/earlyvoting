import React from 'react';

import '../style.scss';

const StateHeader = ({ stateData }) => (
  <section className="hero gradientBg is-halfheight">
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="is-uppercase is-size-1 has-text-white">
                You can vote early in <span class="hilight">{stateData.fullStateName}</span>.
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

export default StateHeader;
