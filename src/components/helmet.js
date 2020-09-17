import React from 'react';
import { withPrefix } from 'gatsby';
import favicon from '../images/checkmark-logo-small.svg'
import useSiteMetadata from '../hooks/use-site-metadata';
import Helmet from 'react-helmet';

export default ({ data }) => {
	const siteMetadata = useSiteMetadata();

	const sharingTitle = () => {
		if (data && data.fullStateName) {
			return `How to vote early in ${data.fullStateName}`;
		}
		return 'How to vote early in your state';
	}

	const sharingDescription = () => {
		if (data && data.fullStateName) {
			return `Get informed about early voting in ${data.fullStateName}`;
		}
		return 'Get informed about early voting in your state.';
	}

	const sharingImage = () => {
		if (data && data.fullStateName) {
			return `/share-images/states/${data.stateSlug}.png`;
		}
		return '/share-images/share.png';
	}

	return (
		<Helmet>
			<link rel="icon" href={favicon}/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
			/>
			<meta name="description" content={siteMetadata.description} />
			<meta name="keywords" content={siteMetadata.keywords} />
			<title>{( () => {
				if (data && data.fullStateName) {
					return `Early Voting Information for ${data.fullStateName}`;
				}
				return siteMetadata.title;
			})()}</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content={siteMetadata.author} />
			<meta
				itemprop="description"
				content={siteMetadata.description}
			/>
			<meta itemprop="image" content={`${siteMetadata.siteUrl}${sharingImage()}`} />

			<meta property="og:title" content={sharingTitle()} />
			<meta property="og:image" content={`${siteMetadata.siteUrl}${sharingImage()}`} />
			<meta property="og:description" content={sharingDescription()} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@earlyvoting" />
			<meta name="twitter:title" content={sharingTitle()} />
			<meta name="twitter:description" content="Let's get this over with!" />
			<meta name="twitter:image" content={`${siteMetadata.siteUrl}${sharingImage()}`} />
		</Helmet>
	)
};
