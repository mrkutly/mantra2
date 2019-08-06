import React from "react"
import styled from "styled-components"

const ArticleListItem = styled.li`
	list-style-type: circle;
	padding: 0 0 3vh 2em;
`

const ArticleLink = styled.a`
	color: inherit;
	text-decoration: none;
	display: block;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	h2 {
		line-height: 2em;
	}

	:focus,
	:hover {
		animation: colorchange 2.5s linear infinite;
		text-shadow: 1px 1px #65318c, 1px -1px #65318c, -1px 1px #65318c,
			-1px -1px #65318c;
		letter-spacing: 4px;
	}

	@keyframes colorchange {
		0% {
			color: #ff8aed;
		}
		10% {
			color: #fff952;
		}
		20% {
			color: #4fffff;
		}
		30% {
			color: #52ff6e;
		}
		40% {
			color: #ff6e66;
		}
		50% {
			color: #ff8aed;
		}
		60% {
			color: #fff952;
		}
		70% {
			color: #4fffff;
		}
		80% {
			color: #52ff6e;
		}
		90% {
			color: #ff6e66;
		}
		100% {
			color: #ff8aed;
		}
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
