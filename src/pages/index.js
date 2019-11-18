import React from "react"
import styled from "styled-components"
import colors from "../components/styles/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import Logo from "../components/Logo"

export default () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div
				style={{
					display: "grid",
					gridTemplateRows: "1fr 1fr 3fr",
					height: "100vh",
				}}
			>
				<Logo />
				<ArrowStyles>&#8595;</ArrowStyles>
			</div>
			<Intro />
		</Layout>
	)
}

const ArrowStyles = styled.span`
	font-size: 5rem;
	grid-row-start: 3;
	justify-self: end;
	align-self: end;
	margin-bottom: 15vh;
	color: ${colors.lightblue};
	animation: pulse 1.5s linear infinite;

	@keyframes pulse {
		from {
			transform: scale(1);
		}
		50% {
			transform: scale(1.3);
		}
		to {
			transform: scale(1);
		}
	}
`
