import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/About"

export const query = graphql`
	query mikeBioQuery {
		allBiosJson(filter: { musician: { eq: "mike" } }) {
			nodes {
				paragraphs
			}
		}
		file(relativePath: { eq: "portraits/mike.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
export default ({ data }) => {
	const { paragraphs } = data.allBiosJson.nodes[0]

	return (
		<Layout>
			<SEO title="Mike McCurdy" />
			<About
				paragraphs={paragraphs}
				image={data.file.childImageSharp.fluid}
				imageAlt="Mike McCurdy"
			/>
		</Layout>
	)
}
