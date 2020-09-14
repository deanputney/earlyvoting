import React from 'react';
import { withPrefix } from 'gatsby';
import favicon from '../images/vbm-logo-small.svg'
import useSiteMetadata from '../hooks/use-site-metadata';
import Helmet from 'react-helmet';
import shareImage from '../images/share.png';

export default () => {
	const siteMetadata = useSiteMetadata();

	return (
		<Helmet>
			<link rel="icon" href={favicon}/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
			/>
			<meta name="description" content={siteMetadata.description} />
			<meta name="keywords" content={siteMetadata.keywords} />
			<title>{siteMetadata.title}</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content={siteMetadata.author} />
			<meta
				itemprop="description"
				content={siteMetadata.description}
			/>
			<meta itemprop="image" content={`${siteMetadata.siteUrl}${shareImage}`} />

			<meta property="og:title" content="How to vote early in your state" />
			<meta property="og:image" content={`${siteMetadata.siteUrl}${shareImage}`} />
			<meta property="og:description" content={siteMetadata.description} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@earlyvoting" />
			<meta name="twitter:title" content="How to vote early in your state" />
			<meta name="twitter:description" content="Let's get this over with!" />
			<meta name="twitter:image" content={`${siteMetadata.siteUrl}${shareImage}`} />
		</Helmet>
	)
};
