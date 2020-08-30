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
            By Jared Kofron and Dean Putney
          </p>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.voteAmerica}>
              <img src={voteAmericaLogo} alt="vote-america-logo"/>
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
        </div>
      </footer>
    )}
  />
)

export default Footer
