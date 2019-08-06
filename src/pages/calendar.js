import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Year from "../components/Year"

export default ({ data }) => {
	const years = data.allCalendarJson.nodes

	const mappedYears = years.map(year => <Year year={year} key={year.year} />)

	return (
		<Layout>
			<SEO title="Calendar" />
			<div>{mappedYears}</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allCalendarJson {
			nodes {
				year
				concerts {
					date
					location {
						city
						support
						venue
					}
					program {
						composer
						description
						title
					}
				}
			}
		}
	}
`
