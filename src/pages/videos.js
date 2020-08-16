import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import VideosIndex from '../components/video/VideosIndex'

export default ({ data }) => (
	<Layout>
		<SEO title="Video" />
		<VideosIndex videos={data.allVideosJson.nodes} />
	</Layout>
)

export const query = graphql`
	query {
		allVideosJson {
			nodes {
				title
				url
			}
		}
	}
`
