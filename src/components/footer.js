import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import voteAmericaLogo from '../images/vote-america-logo.png';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            voteAmerica
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-4'>
            Data provided by <a href={data.site.siteMetadata.voteAmerica}>VoteAmerica</a> and your local government
          </p>

          <p className='is-size-5'>
            Contribute on <a href={data.site.siteMetadata.githubRepository}>Github</a>
          </p>
          &nbsp;
        </div>
      </footer>
    )}
  />
)

export default Footer
