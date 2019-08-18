import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/About"

export const query = graphql`
	query {
		allBiosJson(filter: { musician: { eq: "al" } }) {
			nodes {
				paragraphs
			}
		}
		file(relativePath: { eq: "portraits/al.jpeg" }) {
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
			<SEO title="Al Cerulo" />
			<About
				paragraphs={paragraphs}
				image={data.file.childImageSharp.fluid}
				imageAlt="Al Cerulo"
			/>
		</Layout>
	)
}
