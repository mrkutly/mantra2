import React from "react"
import styled from "styled-components"
import { FullScreenCard } from "./styles"

const Intro = () => (
	<Container id="intro">
		<FullScreenCard background="#f6ddffb0">
			<p className="split">
				Committed to honoring the past and expanding the future of percussion
				music, Mantra Percussion brings to life new works for percussion by
				living composers.
			</p>
		</FullScreenCard>
		<FullScreenCard background="#f6ddffb0">
			<p className="split">
				Mantra Percussion engages new audiences by challenging the standard
				concert format through evening-length events that look toward a grander
				artistic vision.
			</p>
		</FullScreenCard>
	</Container>
)

const Container = styled.section`
	color: black;
	font-size: 4rem;
	font-weight: 600;
	margin-top: 40vh;
	font-family: "Bebas Neue", Montserrat, Arial, Helvetica, sans-serif;
`

export default Intro
