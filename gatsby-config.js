module.exports = {
	siteMetadata: {
		title: `Mantra Percussion`,
		description: `NYC-based percussion sextet committed to honoring the past and expanding the future of percussion
				music`,
		author: `Mark Sauer-Utley`,
		navLinks: [
			{
				id: 2,
				display: `About`,
				href: `#about`,
				partial: true,
				isHash: true,
			},
			{
				id: 6,
				display: `Media`,
				href: `#media`,
				partial: false,
				isHash: true,
			},
			{
				id: 3,
				display: `Calendar`,
				href: `#calendar`,
				partial: false,
				isHash: true,
			},
			{
				id: 5,
				display: `Press`,
				href: `#press`,
				partial: false,
				isHash: true,
			},
			{
				id: 4,
				display: `Contact`,
				href: `#contact`,
				partial: false,
				isHash: true,
			},
			// {
			// 	id: 7,
			// 	display: `Mantra Youth Percussion`,
			// 	href: `/mantrayouth/`,
			// 	partial: true,
			// 	isHash: false,
			// },
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
