import React from "react"
import styled from "styled-components"
import { colorChange } from "./styles/animations"

const ArticleListItem = styled.li`
	list-style-type: circle;
	padding: 0 0 3vh 2em;
`

const ArticleLink = styled.a`
	color: inherit;
	text-decoration: none;
	display: block;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	text-shadow: 1px 1px #65318c, 1px -1px #65318c, -1px 1px #65318c,
		-1px -1px #65318c;

	h2 {
		line-height: 2em;
	}

	:focus,
	:hover {
		animation: ${colorChange} 2.5s linear infinite;
		letter-spacing: 4px;
	}
`

const Article = ({
	article: { publication, title, pullQuote, url, author },
}) => {
	return (
		<ArticleLink href={url} target="_blank" rel="noopener noreferrer">
			<ArticleListItem>
				<h1>{publication}</h1>
				<h2>{title}</h2>
				<h3>"{pullQuote}"</h3>
				<h3>{author}</h3>
			</ArticleListItem>
			<hr />
		</ArticleLink>
	)
}

export default Article
