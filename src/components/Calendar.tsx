import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import Concert from './Concert'
import CalendarYears from './CalendarYears'
import { CalendarNode } from '../types'
import { colorChange } from './styles/animations'

export const ScheduleFragment = graphql`
	fragment Schedule on GroupSchedule {
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
`

export const CALENDAR_QUERY = graphql`
	query {
		dataJson {
			mantra {
				...Schedule
			}
			mantraYouth {
				...Schedule
			}
			recap {
				...Schedule
			}
		}
	}
`

interface CalendarResult {
	dataJson: {
		mantra: CalendarNode[]
		mantraYouth: CalendarNode[]
		recap: CalendarNode[]
	}
}

const descending = (a, b) => (a > b ? -1 : 1)

function getCalendarObject(schedule) {
	const obj = {}

	schedule.forEach(({ year, concerts }) => {
		concerts.forEach(concert => {
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
	const { dataJson } = useStaticQuery<CalendarResult>(CALENDAR_QUERY)
	const [group, setGroup] = useState('mantra')
	const years = useMemo(() => getCalendarObject(dataJson[group]), [
		dataJson,
		group,
	])
	const thisYear = String(new Date(Date.now()).getFullYear())
	const [year, setYear] = useState(thisYear)

	return (
		<SectionStyles id="schedule">
			<FullScreenCard>
				<SectionHeading>
					<h1>Schedule</h1>
				</SectionHeading>

				<div className="group-buttons">
					{['mantra', 'mantraYouth', 'recap'].map(groupName => (
						<button
							key={`${groupName}-button`}
							type="button"
							className={group === groupName ? 'active' : ''}
							onClick={() => {
								setGroup(groupName)
								setYear(thisYear)
							}}
						>
							{groupName}
						</button>
					))}
				</div>

				<div className="grid">
					<CalendarYears
						active={year}
						setYear={setYear}
						options={Object.keys(years).sort(descending)}
					/>
					<div className="shows">
						{years[year]
							? years[year].concerts.map(show => (
									<Concert concert={show} key={`${years[year]}-${show.date}`} />
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

	.group-buttons {
		margin: 2rem 0;
	}

	button {
		margin-right: 2rem;
		cursor: pointer;
		background: transparent;
		color: white;
		border: none;
		font-weight: 600;
		font-size: 2.5rem;
		font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;

		&.active {
			color: var(--lightblue);
		}

		&:hover {
			animation: ${colorChange} 7s infinite;
		}
	}

	@media screen and (max-width: 740px) {
		.grid {
			grid-template-columns: 50px auto;
		}

		.group-buttons {
			margin: 3rem 0;
		}

		button {
			font-size: 1.8rem;
			margin-right: 0;
		}
	}
`

export default Calendar
