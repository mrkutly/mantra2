import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import message from "./message.js"
import Header from "./header/header"
import "./layout.css"
import FourOrgans from "../videos/four-organs.mp4"

const Layout = ({ children, isHomePage }) => {
	console.log(message)
	
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	
	return (
		<>
			{ isHomePage &&
					<BackgroundVideo>
						<video
							src={FourOrgans}
							muted
							loop
							autoPlay
							width="auto"
							height="100%"
						/>
					</BackgroundVideo>
			}
			

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
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

const BackgroundVideo = styled.div`
	z-index: -100;
	width: 100vw;
	height: 110vh;
	position: fixed;
	top: 0;
	right: 0;
	filter: grayscale(1) brightness(0.7);

	@media (max-width: 870px) {
		right: 500px;
	}
	@media (max-width: 770px) {
		right: 570px;
	}
	@media (max-width: 500px) {
		right: 591px;
	}
`

export default Layout
