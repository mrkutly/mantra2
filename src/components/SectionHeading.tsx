import React from "react"
import styled from "styled-components"
import { Link } from "./styles"

const SectionHeading = ({ children }) => (
	<Heading>
		{children}
		<Link href="#next">back</Link>
	</Heading>
)

const Heading = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;

	a {
		font-weight: 600;
	}
`
export default SectionHeading
