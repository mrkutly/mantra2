import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Button, FullScreenCard, Link, PageLink } from "./styles"

const SITE_QUERY = graphql`
	query {
		site {
			siteMetadata {
				navLinks {
					id
					href
					display
					partial
					isHash
				}
			}
		}
	}
`

interface Link {
	id: number
	href: string
	display: string
	partial: boolean
	isHash: boolean
}

interface Site {
	site: {
		siteMetadata: {
			navLinks: Link[]
		}
	}
}

const Next = () => {
	const { site } = useStaticQuery<Site>(SITE_QUERY)

	const handleSubmit = e => e.preventDefault()

	return (
		<section id="next">
			<FullScreenCard background="#8736ffb0" color="white">
				<LearnMoreStyles>
					<h1>Learn more about Mantra Percussion</h1>
					<ul>
						{site.siteMetadata.navLinks.map(link => (
							<li key={link.id}>
								{link.isHash ? (
									<Link href={link.href}>{link.display}</Link>
								) : (
									<PageLink to={link.href}>{link.display}</PageLink>
								)}
							</li>
						))}
					</ul>
				</LearnMoreStyles>
				<Form method="post" onSubmit={handleSubmit}>
					<h2>Sign up for our newsletter</h2>
					<input type="text" placeholder="Email" />
					<Button type="submit">Submit</Button>
				</Form>
			</FullScreenCard>
		</section>
	)
}

const LearnMoreStyles = styled.div`
	ul {
		list-style: none;
		font-weight: 600;
	}
`

const Form = styled.form`
	@media only screen and (min-width: 1000px) {
		grid-column-start: 2;
	}

	input {
		padding: 4px 8px;
		border-radius: 50px;
		border: none;
		outline: none;
		margin-right: 12px;

		&:active,
		&:focus {
			box-shadow: 0 0 12px var(--green);
		}
	}
`

export default Next
