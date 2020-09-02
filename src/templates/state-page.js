import React from "react"
import './style.scss';
import { graphql } from 'gatsby'

export default function StatePage({ data }) {
    const stateData = data.googleSheetVaApiDataRow
      return (
        <div>
            <section className="section">
                <div className="container">
                    early voting in {stateData.state} 
                </div>
            </section>
        </div>
      )
}

export const query = graphql`
  query($slug: String!) {
    googleSheetVaApiDataRow(fields: { slug: { eq: $slug } }) {
      state
    }
  }
`