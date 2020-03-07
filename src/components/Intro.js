import React from "react"
import styled from "styled-components"

export default () => (
	<Container>
		<p>
			Committed to honoring the past and expanding the future of percussion
			music, Mantra Percussion brings to life new works for percussion by living
			composers.
		</p>
		<p>
			Mantra Percussion engages new audiences by challenging the standard
			concert format through evening-length events that look toward a grander
			artistic vision.
		</p>
	</Container>
)

const Container = styled.section`
	color: white;
	font-size: 4rem;
	font-weight: 600;
	text-shadow: 2px 2px black, 2px -2px black, -2px 2px black, -2px -2px black;
	margin-top: 40vh;

	p:not(:first-of-type) {
		margin: 80vh 0 40vh;
	}
`
