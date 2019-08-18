import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Year from "../components/Year"

export default ({ data }) => {
	const years = data.allConcertsJson.edges.reduce((acc, edge) => {
		const year = edge.node.fields.year
		const { location, program, date } = edge.node

		if (!acc[year]) acc[year] = { year, concerts: [] }

		// create a new array with the current concert
		const updatedConcerts = [...acc[year].concerts, { location, program, date }]

		// sort it by date in descending order
		const sortedConcerts = updatedConcerts.sort((a, b) => {
			return new Date(`${b.date}, ${year}`) - new Date(`${a.date}, ${year}`)
		})

		// reassign the concerts array to the sorted concerts
		acc[year].concerts = sortedConcerts
		return acc
	}, {})

	const mappedYears = Object.keys(years)
		.sort((a, b) => b - a)
		.map(year => <Year year={years[year]} key={year} />)

	return (
		<Layout>
			<SEO title="Calendar" />
			<div>{mappedYears}</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allConcertsJson {
			edges {
				node {
					fields {
						year
					}
					program {
						composer
						description
						title
					}
					location {
						city
						support
						venue
					}
					date
				}
			}
		}
	}
`
