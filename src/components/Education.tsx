import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FullScreenCard, ImageContainer } from './styles'
import SectionHeading from './SectionHeading'
import { ImageResult } from './About'

const IMAGES_QUERY = graphql`
	query {
		mantraYouth: file(relativePath: { eq: "mantra-youth-logo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		nnf: file(relativePath: { eq: "nnf-logo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		recap: file(relativePath: { eq: "recap-logo.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

type Images = {
	mantraYouth: ImageResult
	nnf: ImageResult
	recap: ImageResult
}

const Contact = () => {
	const { mantraYouth, nnf, recap } = useStaticQuery<Images>(IMAGES_QUERY)

	return (
		<section id="education">
			<FullScreenCard background="#ffffffe6" color="#000000">
				<SectionHeading color="#000000">
					<h1>Education</h1>
				</SectionHeading>
				<Container>
					<p>
						Mantra Percussion's education initiatives provide the highest-level
						of music instruction with an emphasis on creativity and artistry.
					</p>
					<p>
						We seek to foster the next generation of performers from beginners
						to early career professionals through tuition free masterclasses,
						one on one instruction, collaborations with professional composers,
						professional-level ensemble playing, and diverse performance and
						recording opportunities.
					</p>
					<p>To that end, we have established three primary outlets:</p>
					<hr />
					<div className="project-grid">
						<WhiteImageContainer width="300px">
							<Image fluid={recap.childImageSharp.fluid} />
						</WhiteImageContainer>
						<div>
							<p>
								<strong>recap</strong> — a new professional touring percussion
								quartet composed of 4 recent alumni of Mantra Youth Percussion.
								Arlene Acevedo, Alexis Carter, Tiahna Sterling, and Aline
								Vasquez joined Mantra Youth Percussion while students at Rahway
								High School in Rahway NJ having performed at big events
								including Carnegie Hall Family Day, Make Music NY Concerto for
								Buildings, and the New Music Gathering in Boston. With their
								debut now as a professional ensemble, the quartet will release
								their first album Count to Five on Innova Recordings September
								2021 with a national tour to follow.
							</p>
							<p className="banner">
								Go <a href="https://igg.me/at/recapAlbum">here</a> to support
								recap's debut album, <i>Count to Five</i> and get access to
								limited edition merch.
							</p>
						</div>

						<WhiteImageContainer width="300px">
							<Image fluid={mantraYouth.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							<strong>Mantra Youth Percussion</strong> — an ensemble for high
							school students in the New York metro area. Mantra Youth
							Percussion offers low tuition, flexible scheduling, and diverse
							performance opportunities to the region's aspiring young
							musicians. Mantra Youth Percussion has performed a Carnegie Hall,
							National Sawdust, Juilliard, NYU, The New Music Gathering,
							Princeton Unruly Sounds Festival, the NJ Day of Percussion, the
							Cell, Roulette, MYCincinnati, Times Square, the Necessary Noise
							Festival, and on the Make Music NY Festival which the NY Times
							praised for their "ear-opening" performance!
						</p>

						<WhiteImageContainer width="300px">
							<Image fluid={nnf.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							<strong>Necessary Noise Festival</strong> — an annual 3-day music
							festival of workshops, competitions, showcase concerts, and
							clinics. It is the largest percussion festival on the east coast.
							The Necessary Noise Festival provides an outlet for scholastic,
							collegiate, and professional musicians to share their talents in a
							variety of mediums while promoting the art of percussion to the
							greater community.
						</p>
					</div>
				</Container>
			</FullScreenCard>
		</section>
	)
}

const WhiteImageContainer = styled(ImageContainer)`
	background: white;
	padding: 16px;
	float: none;

	@media (max-width: 740px) {
		width: 300px;
		margin-left: auto;
		margin-right: auto;
	}
`

const Container = styled.div`
	hr {
		margin: 40px 0;
	}

	.project-grid {
		display: grid;
		grid-template-columns: 300px auto;
		grid-gap: 120px 100px;
		align-items: center;
		padding-top: 60px;
	}

	.banner {
		background: white;
		color: black;
		font-size: 1.4rem;
		padding: 12px;
		box-shadow: 8px 8px lightblue, 16px 16px var(--lightblue);

		a {
			color: black;
			font-weight: 600;
		}
	}

	@media screen and (max-width: 740px) {
		.project-grid {
			display: grid;
			grid-template-columns: auto;
			grid-gap: 40px;
			align-items: top;
		}
	}
`

export default Contact
