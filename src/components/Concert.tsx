import React from 'react'
import { Concert as ConcertType } from '../types'

function mapProgram(program) {
	const i = 0

	return program.map(piece => {
		if (piece.composer && piece.title) {
			return (
				<li key={`${piece.composer}-${piece.title}-${i}`}>
					<h4>
						{piece.composer} - {piece.title}
					</h4>
				</li>
			)
		}
		return (
			<li key={`${piece}-${i}`}>
				<h4>{piece.description}</h4>
			</li>
		)
	})
}

interface ConcertProps {
	concert: ConcertType
}

const Concert = ({ concert }: ConcertProps) => {
	const { date, location, program } = concert

	return (
		<div>
			<h2>Date: {date}</h2>
			<h2>
				Venue: {location.venue} | {location.city}
			</h2>
			<h2>Program:</h2>
			<ul>{mapProgram(program)}</ul>
			<hr />
		</div>
	)
}

export default Concert
