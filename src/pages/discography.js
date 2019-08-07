import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AlbumsIndex from "../components/AlbumsIndex"

export default ({ data }) => (
	<Layout>
		<SEO title="Discography" />
		<AlbumsIndex albums={data.allAlbumsJson.nodes} />
	</Layout>
)

export const query = graphql`
	query {
		allAlbumsJson {
			nodes {
				title
				url
				href
				host
				height
			}
		}
	}
`
