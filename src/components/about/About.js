import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "./AboutLayout"

export default (props) => {
	const { paragraphs } = props

	const mappedParagraphs = paragraphs.map((p, i) => (
		<BioParagraph key={`paragraph-${i}`}>{p}</BioParagraph>
	))

	return (
		<Layout>
			<div style={{ padding: "10px" }}>
				<ImageContainer>
					<Img fluid={props.image} alt={props.imageAlt} />
				</ImageContainer>
				{mappedParagraphs}
			</div>
		</Layout>
	)
}

const BioParagraph = styled.p`
	line-height: 1.6;
	letter-spacing: 1.1px;
	font-size: 1.3rem;
	text-shadow: 1px 1px lightblue;
	font-weight: 300;
`

export const ImageContainer = styled.div`
	float: left;
	width: 34em;
	margin: 0 5vh 5vh 0;
	box-shadow: 5px 5px lightblue, 10px 10px #4fffff;

	@media (max-width: 700px) {
		width: 100%;
	}
`
