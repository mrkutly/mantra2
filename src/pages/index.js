import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Intro from "../components/Intro"

export default () => {
	return (
		<Layout isHomePage={true}>
			<SEO title="Home" />
			<div
				style={{
					display: "grid",
					gridTemplateRows: "1fr 1fr 3fr",
					height: "100vh",
				}}
			>
				<Logo />
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
