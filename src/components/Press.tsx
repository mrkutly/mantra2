import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FullScreenCard } from "./styles"
import SectionHeading from "./SectionHeading"
import Article from "./Article"

const PRESS_QUERY = graphql`
	query {
		articles: allArticlesJson(sort: { fields: publication, order: DESC }) {
			nodes {
				author
				publication
				pullQuote
				title
				url
			}
		}
	}
`

interface PressResult {
	articles: {
		nodes: Article[]
	}
}

const Press = () => {
	const { articles } = useStaticQuery<PressResult>(PRESS_QUERY)
	const mappedArticles = articles.nodes.map(article => (
		<Article article={article} key={article._id} />
	))

	return (
		<section id="press">
			<FullScreenCard background="#000000b0" color="white">
				<SectionHeading>
					<h1>Press</h1>
				</SectionHeading>
				<PressList>{mappedArticles}</PressList>
			</FullScreenCard>
		</section>
	)
}

const PressList = styled.ul`
	margin-top: 4%;
	margin-left: 1%;
	height: 75vh;
	overflow: scroll;
`

export default Press
