module.exports = {
	siteMetadata: {
		title: `Mantra Percussion`,
		description: `Website for NYC-based percussion sextet, Mantra Percussion`,
		author: `Mark Sauer-Utley`,
		navbarLinks: [
			{
				id: 1,
				name: `Home`,
				link: `/`,
				partial: false,
			},
			{
				id: 2,
				name: `Bios`,
				link: `/bios/`,
				partial: true,
			},
			{
				id: 3,
				name: `Calendar`,
				link: `/calendar/`,
				partial: false,
			},
			{
				id: 4,
				name: `Press`,
				link: `/press/`,
				partial: false,
			},
			{
				id: 5,
				name: `Video`,
				link: `/videos/`,
				partial: false,
			},
			{
				id: 6,
				name: `Discography`,
				link: `/discography/`,
				partial: false,
			},
			{
				id: 7,
				name: `Mantra Youth Percussion`,
				link: `/mantrayouth/`,
				partial: true,
			},
			{
				id: 8,
				name: `Contact`,
				link: `/contact/`,
				partial: false,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaultQuality: 100,
				stripMetadata: true,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/mantra-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
