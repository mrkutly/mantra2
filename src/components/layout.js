/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import message from "./message.js"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {
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

	return (
		<>
			<ImageContainer>
				<Image
					fluid={data.file.childImageSharp.fluid}
					alt="Mantra playing Drumming by Steve Reich"
				/>
			</ImageContainer>
			<Header siteTitle={data.site.siteMetadata.title} />
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
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

const ImageContainer = styled.div`
	position: fixed;
	top: 0;
	min-height: 100vh;
	width: 100vw;
	z-index: -1;
`

export default Layout
