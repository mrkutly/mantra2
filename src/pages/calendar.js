import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Year from "../components/Year"

export default ({ data }) => {
	const years = data.allCalendarJson.edges.reduce((acc, edge) => {
		const year = edge.node.year
		edge.node.concerts.forEach((concert) => {
			const { location, program, date } = concert

			if (!acc[year]) acc[year] = { year, concerts: [] }
			// create a new array with the current concert
			const updatedConcerts = [
				...acc[year].concerts,
				{ location, program, date },
			]

			// sort it by date in descending order
			const sortedConcerts = updatedConcerts.sort((a, b) => {
				return new Date(`${b.date}, ${year}`) - new Date(`${a.date}, ${year}`)
			})

			// reassign the concerts array to the sorted concerts
			acc[year].concerts = sortedConcerts
		})

		return acc
	}, {})

	const mappedYears = Object.keys(years)
		.sort((a, b) => b - a)
		.map((year) => <Year year={years[year]} key={year} />)

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
			edges {
				node {
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
					year
				}
			}
		}
	}
`
