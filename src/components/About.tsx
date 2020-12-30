import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import SectionHeading from './SectionHeading'
import { ImageContainer, FullScreenCard } from './styles'
import Expand from './Expand'

const ABOUT_QUERY = graphql`
	query {
		bios: allBiosJson {
			edges {
				node {
					id
					musician
					paragraphs
				}
			}
		}

		al: file(relativePath: { eq: "portraits/al.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		band: file(relativePath: { eq: "drumming-krakow.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		chris: file(relativePath: { eq: "portraits/chris.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		joe: file(relativePath: { eq: "portraits/joe.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		mark: file(relativePath: { eq: "portraits/mark.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		mike: file(relativePath: { eq: "portraits/mike.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

interface BioNode {
	node: {
		id: number
		musician: string
		paragraphs: string[]
	}
}

export interface ImageResult {
	childImageSharp: {
		fluid: FluidObject
	}
}

type Bios = {
	bios: {
		edges: BioNode[]
	}
	al: ImageResult
	band: ImageResult
	chris: ImageResult
	joe: ImageResult
	mark: ImageResult
	mike: ImageResult
}

const About = () => {
	const data = useStaticQuery<Bios>(ABOUT_QUERY)
	const [active, setActive] = useState<string>('the band')
	const activeBio = data.bios.edges.find(bio => bio.node.musician === active)
	const imageName = active === 'the band' ? 'band' : active
	const activeImage = data[imageName].childImageSharp.fluid
	const { musician, paragraphs } = activeBio.node

	return (
		<section id="about" style={{ fontWeight: 600 }}>
			<FullScreenCard background="#ffffffe6" color="#000000">
				<SectionHeading color="#000000">
					<h1>
						About{' '}
						<Expand
							active={active}
							colors={{ primary: '#ffffff', background: 'black' }}
							options={data.bios.edges.map(bio => bio.node.musician)}
							setActive={setActive}
						/>
					</h1>
				</SectionHeading>
				<div>
					<ImageContainer width="400px">
						<Image fluid={activeImage} />
					</ImageContainer>
					<div>
						{paragraphs.map((text, idx) => (
							<p key={`${musician}-${idx}`}>{text}</p>
						))}
					</div>
				</div>
			</FullScreenCard>
		</section>
	)
}

export default About
