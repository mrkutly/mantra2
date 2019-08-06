import React from "react"

function mapProgram(program) {
	let i = 0

	return program.map(piece => {
		if (piece.composer && piece.title) {
			return (
				<li key={`${piece.composer}-${piece.title}-${i}`}>
					<h4>
						{piece.composer} - {piece.title}
					</h4>
				</li>
			)
		} else {
			return (
				<li key={`${piece}-${i}`}>
					<h4>{piece.description}</h4>
				</li>
			)
		}
	})
}

const Concert = props => {
	const { date, location, program } = props.concert

	return (
		<div>
			<h3>Date: {date}</h3>
			<h3>
				Venue: {location.venue} | {location.city}
			</h3>
			<h3>Program:</h3>
			<ul>{mapProgram(program)}</ul>
			<hr />
		</div>
	)
}

export default Concert
