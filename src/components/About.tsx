import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { FullScreenCard, Link } from "./styles"
import { colorChange } from "./styles/animations"
import { keyOf } from "core-js/fn/dict"

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

interface Image {
	childImageSharp: {
		fluid: object
	}
}

type Bios = {
	bios: {
		edges: BioNode[]
	}
	al: Image
	band: Image
	chris: Image
	joe: Image
	mark: Image
	mike: Image
}

const About = () => {
	const data = useStaticQuery<Bios>(ABOUT_QUERY)
	const [active, setActive] = useState<string>("the band")
	const [showMembers, setShowMembers] = useState<boolean>(false)
	const toggleShowMembers = () => setShowMembers(!showMembers)
	const activeBio = data.bios.edges.find(bio => bio.node.musician === active)
	const inactiveBios = data.bios.edges.filter(
		bio => bio.node.musician !== active
	)
	const imageName = active === "the band" ? "band" : active
	const activeImage = data[imageName].childImageSharp.fluid
	const { musician, paragraphs } = activeBio.node
	return (
		<section id="about" style={{ fontWeight: 600 }}>
			<FullScreenCard background="#003977e6" color="white">
				<div>
					<Link href="#next">back</Link>
					<h1>
						About{" "}
						<Expand onClick={toggleShowMembers} role="button">
							<span className="active">{musician}</span>
							{showMembers &&
								inactiveBios.map(({ node }) => (
									<span
										key={node.id}
										role="button"
										onClick={() => setActive(node.musician)}
									>
										{node.musician}
									</span>
								))}
						</Expand>
					</h1>
				</div>
				<BioCard>
					<Image fluid={activeImage} />
					<div>
						{paragraphs.map((text, idx) => (
							<p key={`${musician}-${idx}`}>{text}</p>
						))}
					</div>
				</BioCard>
			</FullScreenCard>
		</section>
	)
}

const BioCard = styled.div``

const Expand = styled.span`
	span {
		cursor: pointer;
		margin-right: 24px;
	}
	.active {
		animation: ${colorChange} 3s infinite linear;
	}
`

export default About
