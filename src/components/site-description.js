import React from 'react';

import './style.scss';

const SiteDescription = () => (
  <div class="columns">
    <div class="column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
      <p>
        With the election coming close, many already decided citizens are just waiting for
        their opportunity to vote. Fortunately, <b>40 states</b> (plus District of Columbia)
        allow some form of voting before the election on November 3rd.
      </p>

      <p>
        Each state has its own rules, deadlines and terminology for voting before the
        general election. Some call it "early voting" or "in-person absentee". Others are
        mailing out ballots in advance which you can mail back or drop off in secure boxes
        or at county offices. Some states conclude early voting several days before the
        election.
      </p>

      <p>
        This site attempts to make finding the details for your state's early voting rules
        convenient and accurate. <b class="is-nowrap">Get your vote in early and relax.</b>
      </p>
    </div>
  </div>
);

export default SiteDescription;
