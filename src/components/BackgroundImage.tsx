import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const BackgroundSection = ({ children }) => {
	const data = useStaticQuery(graphql`
		query BackgroundImageQuery {
			file(relativePath: { eq: "four-organs.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1920, grayscale: true) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return (
		<StyledBackgroundImage fluid={data.file.childImageSharp.fluid}>
			{children}
		</StyledBackgroundImage>
	)
}

const StyledBackgroundImage = styled(BackgroundImage)`
	background-size: cover;

	&::before,
	&::after {
		width: 100vw !important;
		min-height: 100vh;
		position: fixed !important;
	}
`

BackgroundSection.propTypes = {
	children: PropTypes.node.isRequired,
}

export default BackgroundSection
