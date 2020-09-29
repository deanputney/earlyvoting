module.exports = {
	pathPrefix: "/",
	siteMetadata: {
		title: 'Vote Early!',
		author: 'Early Voting Contributors',
		imageUrl: 'src/images/share.png',
		description: 'Get informed about early voting in your state.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		// twitter: 'https://twitter.com/amanhimself',
		// github: `https://github.com/amandeepmittal`,
		// medium: 'https://medium.com/@amanhimself',
		// gatsby: 'https://www.gatsbyjs.org/',
		// bulma: 'https://bulma.io/',
		voteAmerica: 'https://www.voteamerica.com/',
		githubRepository: 'https://github.com/deanputney/earlyvoting',
		siteUrl: 'https://earlyvoting.com'
	},
	plugins: [
		{
			resolve: 'gatsby-source-google-sheets',
			options: {
				spreadsheetId: '1PgRctpY7Wq_CNJLr66DvSh_LmCi6r7h2FVrwBheoF58',
				worksheetTitle: 'va-api-data',
				credentials: require('./gatsby-sheets-creds.json')
			}
		},
		{
			resolve: 'gatsby-source-google-sheets',
			options: {
				spreadsheetId: '1PgRctpY7Wq_CNJLr66DvSh_LmCi6r7h2FVrwBheoF58',
				worksheetTitle: 'early-voting-data',
				credentials: require('./gatsby-sheets-creds.json')
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/checkmark-logo-small.svg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-177909643-1',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
