import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/About"

export default ({ data }) => {
	const { paragraphs } = data.allBiosJson.edges[0].node

	return (
		<Layout>
			<SEO title="Bio" />
			<About
				paragraphs={paragraphs}
				image={data.file.childImageSharp.fluid}
				imageAlt="Mantra playing Drumming by Steve Reich"
			/>
		</Layout>
	)
}

export const query = graphql`
	query {
		allBiosJson(filter: { musician: { eq: "band" } }) {
			edges {
				node {
					id
					musician
					paragraphs
				}
			}
		}

		file(relativePath: { eq: "drumming-krakow.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
