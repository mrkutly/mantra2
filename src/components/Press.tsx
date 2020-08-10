import React from "react"
import styled from "styled-components"
import Article from "./Article"

export default props => {
	const mappedArticles = props.articles.map(article => (
		<Article article={article} key={article._id} />
	))

	return <PressList>{mappedArticles}</PressList>
}

const PressList = styled.ul`
	margin-top: 4%;
	margin-left: 1%;
`
