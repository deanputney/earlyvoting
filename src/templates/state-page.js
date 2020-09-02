import React from "react"
import './style.scss';

export default function StatePage({ data }) {
    const stateData = data.googleSheetSiteDatesRow
      return (
        <div>
            <section className="section">
                <div className="container">
                    early voting in {stateData.state} starts {stateData.earlyVotingStartDate} and ends {stateData.earlyVotingEndDate}
                </div>
            </section>
        </div>
      )
}

export const query = graphql`
  query($slug: String!) {
    googleSheetSiteDatesRow(fields: { slug: { eq: $slug } }) {
      state
      earlyVotingStartDate
      earlyVotingEndDate
    }
  }
`