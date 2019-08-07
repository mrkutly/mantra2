import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Email } from "../Contact"
import { ImageContainer } from "../About"

const NecessaryNoise = props => {
	return (
		<Container>
			<ImageContainer>
				<Img
					fluid={props.image}
					alt="Mantra Youth Percussion playing Angélica Negrón's Count to Five"
				/>
			</ImageContainer>
			<p>
				Mantra Percussion's Necessary Noise Festival (Now in its 6th season) is
				one of the largest percussion events on the east coast. The festival
				provides an outlet for scholastic, collegiate, and professional
				musicians and ensembles to share their talents in a variety of mediums
				while promoting the art of contemporary percussion performance to the
				greater community. The 2019 edition of NNF will took place at Rahway
				High School in NJ February 9th from 3-9pm. Featured ensembles this year
				included Mantra Percussion, Mantra Youth Percussion, Manhattan School of
				Music Percussion Ensemble, NYU Percussion Ensemble, Bard College
				Percussion Ensemble, William Paterson University Percussion Ensemble,
				and Juilliard Pre-College Percussion Ensemble.
			</p>
			<p>Past festivals have featured performances and workshops from:</p>
			<ListContainer>
				<ul>
					<li>Stony Brook University</li>
					<li>Rutgers University</li>
					<li>NJCU</li>
					<li>Bard College</li>
					<li>William Paterson University</li>
					<li>New York University</li>
					<li>Juilliard</li>
					<li>Kean University</li>
					<li>SUNY Purchase</li>
					<li>Manhattan School of Music</li>
				</ul>
				<ul>
					<li>Xylopholks</li>
					<li>The Cadets</li>
					<li>Anaglyphs</li>
					<li>Marateck</li>
					<li>Rahway High School</li>
					<li>Rahway Academy</li>
					<li>Rahway Elementary School</li>
					<li>Rahway Elementary School</li>
					<li>Verona High School</li>
					<li>Montville High School</li>
				</ul>
				<ul>
					<li>Lazaar Middle School</li>
					<li>Ridgewood High School</li>
					<li>Randolph High School</li>
					<li>West Essex High School</li>
					<li>Metuchen High School</li>
					<li>West Orange High School</li>
					<li>Rutgers Youth Percussion Ensemble</li>
					<li>Special Music School</li>
					<li>Ramsey High School</li>
				</ul>
			</ListContainer>
			<h4>
				Interested ensembles should contact Festival Director Joe Bergen at{" "}
				<Email href="mailto:joe@mantrapercussion.org">
					joe@mantrapercussion.org
				</Email>{" "}
				for more information.
			</h4>
		</Container>
	)
}

const Container = styled.div`
	p,
	ul {
		margin: 20px auto;
		line-height: 1.4;
		letter-spacing: 1.1px;
	}

	ul {
		list-style: circle;
	}
`

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: 5fr 5fr 5fr;
	ul {
		list-style: circle;
		font-weight: 550;
	}
`

export default NecessaryNoise
