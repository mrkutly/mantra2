import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FullScreenCard } from './styles'
import { colorChange } from './styles/animations'
import SectionHeading from './SectionHeading'
import Concert from './Concert'
import CalendarYears from './CalendarYears'
import { CalendarNode } from '../types'

export const CALENDAR_QUERY = graphql`
	query {
		shows: allCalendarJson {
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

interface CalendarResult {
	shows: {
		edges: CalendarNode[]
	}
}

const descending = (a, b) => (a > b ? -1 : 1)

function getCalendarObject(shows: { edges: CalendarNode[] }) {
	const obj = {}

	shows.edges.forEach(edge => {
		const { year } = edge.node
		edge.node.concerts.forEach(concert => {
			const { location, program, date } = concert

			if (!obj[year]) obj[year] = { year, concerts: [] }
			// create a new array with the current concert
			const updatedConcerts = [
				...obj[year].concerts,
				{ location, program, date },
			]

			// sort it by date in descending order
			const sortedConcerts = updatedConcerts.sort((a, b) => {
				const dateA = new Date(`${a.date}, ${year}`)
				const dateB = new Date(`${b.date}, ${year}`)
				return descending(dateA, dateB)
			})

			// reassign the concerts array to the sorted concerts
			obj[year].concerts = sortedConcerts
		})
	})

	return obj
}

const Calendar = () => {
	const { shows } = useStaticQuery<CalendarResult>(CALENDAR_QUERY)
	const years = getCalendarObject(shows)
	const thisYear = String(new Date(Date.now()).getFullYear())
	const [active, setActive] = useState(thisYear)

	return (
		<SectionStyles id="calendar">
			<FullScreenCard>
				<SectionHeading>
					<h1>Calendar</h1>
				</SectionHeading>

				<div className="grid">
					<CalendarYears
						active={active}
						setActive={setActive}
						options={Object.keys(years).sort(descending)}
						colors={{ primary: '#ffffff', background: 'black' }}
					/>
					<div className="shows">
						{years[active]
							? years[active].concerts.map(show => (
									<Concert concert={show} key={show.id} />
							  ))
							: 'Nothing on the books for this year yet. Come back later.'}
					</div>
				</div>
			</FullScreenCard>
		</SectionStyles>
	)
}

const SectionStyles = styled.section`
	.shows {
		padding: 20px;
	}

	.grid {
		display: grid;
		grid-template-columns: 100px auto;
	}
`

export default Calendar
