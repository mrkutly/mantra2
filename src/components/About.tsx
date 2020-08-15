import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import SectionHeading from "./SectionHeading"
import { ImageContainer, FullScreenCard } from "./styles"
import { colorChange } from "./styles/animations"

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

interface ImageResult {
	childImageSharp: {
		fluid: object
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

	const handleSelect = musician => {
		toggleShowMembers()
		setActive(musician)
	}
	return (
		<section id="about" style={{ fontWeight: 600 }}>
			<FullScreenCard background="#003977e6" color="white">
				<SectionHeading>
					<ExpandStyles>
						About{" "}
						<div className="expand">
							<span
								className="active"
								onClick={toggleShowMembers}
								role="button"
							>
								{musician}
							</span>
							{showMembers && (
								<ul>
									{inactiveBios.map(({ node }) => (
										<li
											className="options"
											key={node.id}
											onClick={() => handleSelect(node.musician)}
											onKeyPress={({ key }) =>
												key === "Enter" && handleSelect(node.musician)
											}
											role="button"
											tabIndex={0}
										>
											{node.musician}
										</li>
									))}
								</ul>
							)}
						</div>
					</ExpandStyles>
				</SectionHeading>
				<BioCard>
					<ImageContainer width="400px">
						<Image fluid={activeImage} />
					</ImageContainer>
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

const ExpandStyles = styled.h1`
	.expand {
		display: inline;
		position: relative;
	}

	ul {
		list-style: none;
		position: absolute;
		z-index: 2;
		background: #000;
		width: 191px;
		padding: 12px 12px 0;
		text-align: center;
		margin: 0;
		color: var(--lightpink);
	}

	li,
	span {
		cursor: pointer;
	}

	.active {
		animation: ${colorChange} 3s infinite linear;
	}

	.options {
		--rotate: -4deg;
		--scale: 1;
		transform: rotate(var(--rotate)) scale(var(--scale));

		&:hover,
		&:focus {
			color: var(--black);
			background-color: var(--lightpink);
		}
	}
`

export default About
