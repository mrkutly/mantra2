import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "./AboutLayout"

export default props => {
	const { paragraphs } = props

	const mappedParagraphs = paragraphs.map((p, i) => (
		<BioParagraph key={`paragraph-${i}`}>{p}</BioParagraph>
	))

	return (
		<Layout>
			<ImageContainer>
				<Img fluid={props.image} alt={props.imageAlt} />
			</ImageContainer>
			{mappedParagraphs}
		</Layout>
	)
}

const BioParagraph = styled.p`
	line-height: 1.4;
	letter-spacing: 1.1px;
`

const ImageContainer = styled.div`
	float: left;
	width: 34em;
	margin: 0 5vh 5vh 0;
	box-shadow: 5px 5px lightblue, 10px 10px #4fffff;

	@media (max-width: 710px) {
		float: none;
		margin: 6px auto;
		display: block;
	}

	@media (max-width: 450px) {
		margin: 17px 0 0 0;
		width: 100%;
		float: none;
	}
`
