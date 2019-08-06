import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/About"

export const query = graphql`
	query {
		allBiosJson(filter: { musician: { eq: "mark" } }) {
			nodes {
				paragraphs
			}
		}
		file(relativePath: { eq: "portraits/mark.jpeg" }) {
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
			<SEO title="Mark Utley" />
			<About
				paragraphs={paragraphs}
				image={data.file.childImageSharp.fluid}
				imageAlt="Mark Utley"
			/>
		</Layout>
	)
}
