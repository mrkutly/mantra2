import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from './BackgroundImage'
import message from "./message.js"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children, isHomePage }) => {
	console.log(message)
	
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
			file(relativePath: { eq: "four-organs.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1800, grayscale: true) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	console.log(data)

	const foreGround = <>
		<Header siteTitle={data.site.siteMetadata.title} isHomePage={isHomePage}/>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 1400,
				padding: `0px 1.0875rem 1.45rem`,
				paddingTop: 0,
			}}
		>
			<main>{children}</main>
		</div>
	</>

	const withBackgroundImage = <BackgroundImage>{foreGround}</BackgroundImage>

	if (isHomePage) return withBackgroundImage

	return foreGround
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
