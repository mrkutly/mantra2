import React from "react"
import { graphql } from "gatsby"
import Press from "../components/Press"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
	<Layout>
		<SEO title="Press" />
		<Press articles={data.allArticlesJson.nodes} />
	</Layout>
)

export const query = graphql`
	query {
		allArticlesJson(sort: { fields: publication, order: DESC }) {
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
