import React from "react"
import styled from "styled-components"
import colors from "./styles/colors"
import { colorChange } from "./styles/animations"

const Contact = () => (
	<Container>
		<h3>
			For booking, contact Joe Bergen at{" "}
			<a href="mailto:joe@mantrapercussion.org">joe@mantrapercussion.org</a>
		</h3>

		<h3>
			For any other inquiries, reach out to us at{" "}
			<a href="mailto:info@mantrapercussion.org">info@mantrapercussion.org</a>
		</h3>
	</Container>
)

const Container = styled.div`
	text-align: center;
	margin: 20vh auto;
	max-width: 1200px;

	a {
		color: ${colors.peach};
		transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

		:hover,
		:focus {
			animation: ${colorChange} 2.5s linear infinite;
			text-shadow: 1px 1px black;
			letter-spacing: 2px;
		}
	}
`

export default Contact
