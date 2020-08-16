import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => (
	<Layout>
		<SEO title="Mantra Youth Percussion" />
	</Layout>
)

export const query = graphql`
	query {
		image: file(relativePath: { eq: "youth-quartet.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
