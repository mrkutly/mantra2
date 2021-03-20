import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FullScreenCard, ImageContainer } from './styles'
import SectionHeading from './SectionHeading'
import { ImageResult } from './About'

const IMAGES_QUERY = graphql`
	query {
		mantra: file(relativePath: { eq: "mantra-logo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

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
	mantra: ImageResult
	mantraYouth: ImageResult
	nnf: ImageResult
	recap: ImageResult
}

const Contact = () => {
	const { mantra, mantraYouth, nnf, recap } = useStaticQuery<Images>(
		IMAGES_QUERY
	)

	return (
		<section id="programs">
			<FullScreenCard>
				<SectionHeading>
					<h1>Programs</h1>
				</SectionHeading>
				<Container>
					<div className="program">
						<h1>Mantra Percussion</h1>
						<WhiteImageContainer width="300px" style={{ padding: '20px 0' }}>
							<Image fluid={mantra.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							Formed in 2009, our flagship sextet performs internationally,
							having commissioned and premiered more than 50 new works for
							percussion ensemble over the past decade. The group focuses on
							collaborations with artists from diverse backgrounds and redefines
							the landscape of percussion concerts by challenging the standard
							concert format through evening-length events that look toward a
							grander artistic vision.
						</p>
						<p>
							The ensemble has been featured at major festivals and arts venues
							throughout North America, Europe and Asia, including the Brooklyn
							Academy of Music’s Next Wave Festival, the Bang on a Can Marathon,
							Sacrum Profanum Festival (Poland), Now Music Festival (South
							Korea), the GAIDA festival (Lithuania), National Public Radio,
							Duke Performances, the Drogheda Festival (Ireland), the Ecstatic
							Music Festival and the Ecstatic Summer Festival, among many
							others. Over the past decade Mantra Percussion has commissioned
							and/or premiered over 50 new works for percussion ensemble.
						</p>
						<p>
							Hailed as “...a fresh source of energy" and "forward thinking”,
							they were praised by The New Yorker and TimeOut New York for
							presenting one of the ten best classical performances for the 2012
							New York premiere of Michael Gordon’s Timber.
						</p>
						<p>
							Mantra Percussion has recorded Aaron Siegel's Science Is Only A
							Sometimes Friend (Lockstep Records), one of Time Out New York's
							Ten Best Classical Albums of 2011, as well as Siegel’s A Great
							Many (New Amsterdam Records), Paula Matthusen’s The Days are Nouns
							(Innova Records), Mathew Rosenblum’s Last Round (New Focus
							Recordings), Matthew Welch’s And Here We Are (Kotekan Records),
							Daniel Wohl’s Holographic (New Amsterdam Records), Michael Fiday's
							Hands On! (Innova Records), and in 2016 they released the
							double-CD, Timber Remixed/Timber Live (Cantaloupe Music) with 12
							remixes of Michael Gordon's Timber by leading electronica artists
							including Squarepusher, Jóhann Jóhannsson, Tim Hecker, Fennesz,
							Oneohtrix Point Never, Hauschka and others.
						</p>
					</div>

					<div className="program">
						<h1>Recap</h1>
						<WhiteImageContainer width="300px">
							<Image fluid={recap.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							A professional percussion quartet of BIPOC women, all alumni of
							Mantra Youth Percussion. Arlene Acevedo, Alexis Carter, Tiahna
							Sterling, and Aline Vasquez joined MYP while students at Rahway
							High School. Recap reevaluates the white male-dominated world of
							percussion — Arlene Acevedo explains: “We want to show the world
							that anyone can do this. We’re young women of color doing this...
							and you can too!”
						</p>
						<p>
							Recap releases their debut album, <i>Count to Five</i>, on Innova
							Recordings in September 2021 with music by Angelica Negron,
							Allison Loggins-Hull, Ellen Reid, Lesley Flanigan, Mary
							Kouyoumdjian, and Caroline Shaw. Recap is the headlining artists
							for the 2021 New Music Gathering in Minneapolis, the New Jersey
							Music Educators State Conference, and Mantra Percussion Inc.’s own
							Necessary Noise Festival.
						</p>
						<p>
							In 2022, Recap will collaborate with indigenous artists from
							Alaska to present a new hybrid-work that is part performance/part
							documentary with support from Found Sound Nation, the Wildshore
							Festival for New Music, and the United States National Parks
							Service.
						</p>
						<p>
							Recap aims to tour their new repertoire across the globe and to
							inspire other young musicians who might not have considered
							following a path into contemporary arts.
						</p>
					</div>

					<div className="program">
						<h1>Mantra Youth Percussion</h1>
						<WhiteImageContainer width="300px" style={{ padding: '20px' }}>
							<Image fluid={mantraYouth.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							Established in 2014, our tuition-free youth ensemble offers
							underrepresented students unique percussion music education and
							high-level performance opportunities, giving students the tools to
							realize their own potential, and fostering artistic excellence and
							inclusiveness.
						</p>
						<p>
							MYP focuses exclusively on performing and commissioning music by
							living composers. The group has performed at Carnegie Hall,
							National Sawdust, Juilliard, NYU, The New Music Gathering,
							Princeton Unruly Sounds Festival, the NJ Day of Percussion, the
							Cell, Roulette, MYCincinnati, Times Square, the Necessary Noise
							Festival, and on the Make Music NY Festival which the NY Times
							praised for their "ear-opening" performance.
						</p>
						<p>
							Over these past seven years, MYP has either commissioned or
							premiered new works by more than 25 living composers.
						</p>
					</div>

					<div className="program">
						<h1>Necessary Noise Festival</h1>
						<WhiteImageContainer width="300px" style={{ padding: '20px' }}>
							<Image fluid={nnf.childImageSharp.fluid} />
						</WhiteImageContainer>
						<p>
							An annual 3-day music festival of workshops, competitions,
							showcase concerts, and clinics. It is the largest percussion
							festival on the east coast.
						</p>
						<p>
							NNF provides an outlet for scholastic, collegiate, and
							professional musicians to share a wide spectrum of styles, while
							promoting the art of percussion to the greater community. Past
							participating schools include Juilliard, Manhattan School of
							Music, NYU, Stony Brook University, Queens College Gamelan
							Ensemble, Bard College, William Paterson University, Rowan
							University, Montclair State University Laptop Orchestra, Rutgers
							World Music Ensemble, Suny Purchase, Kean, Special Music School,
							and area high school and middle school programs.
						</p>
					</div>
				</Container>
			</FullScreenCard>
		</section>
	)
}

const WhiteImageContainer = styled(ImageContainer)`
	background: white;
`

const Container = styled.div`
	div.program {
		min-height: 300px;
		margin: 2rem auto 7rem;
		font-weight: 600;

		h1 {
			font-size: 3.5rem;
			color: lightblue;
		}
	}
`

export default Contact
