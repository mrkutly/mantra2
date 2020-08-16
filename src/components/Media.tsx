import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FullScreenCard } from "./styles"
import SectionHeading from "./SectionHeading"
import VideosIndex from "./video/VideosIndex"

export const MEDIA_QUERY = graphql`
	query {
		albums: allAlbumsJson {
			nodes {
				title
				url
				href
				host
				height
			}
		}

		videos: allVideosJson {
			nodes {
				title
				url
			}
		}
	}
`

interface MediaResult {
	albums: {
		nodes: Album[]
	}
	videos: {
		nodes: Video[]
	}
}

const ALBUMS = "ALBUMS"
const VIDEOS = "VIDEOS"

enum Active {
	ALBUMS = "ALBUMS",
	VIDEOS = "VIDEOS",
}

const Media = () => {
	const [active, setActive] = useState<Active>(Active.VIDEOS)
	const { albums, videos } = useStaticQuery<MediaResult>(MEDIA_QUERY)

	return (
		<section id="media">
			<FullScreenCard background="#f3ff9de6">
				<SectionHeading>
					<div>
						{[Active.VIDEOS, Active.ALBUMS].map(opt => (
							<MediaOption
								className={active === opt ? "active" : null}
								key={opt}
								onClick={() => setActive(opt)}
								onKeyPress={({ key }) => key === "Enter" && setActive(opt)}
								role="button"
								tabIndex={0}
							>
								{opt}
							</MediaOption>
						))}
					</div>
				</SectionHeading>
				{active === Active.VIDEOS && <VideosIndex videos={videos.nodes} />}
				{active === Active.ALBUMS && (
					<pre>{JSON.stringify(albums, null, 2)}</pre>
				)}
			</FullScreenCard>
		</section>
	)
}

const MediaOption = styled.span`
	--rotate: -4deg;
	--scale: 1;
	display: inline-block;
	transform: rotate(var(--rotate)) scale(var(--scale));
	color: black;
	cursor: pointer;
	margin-right: 20px;
	font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
	text-rendering: optimizeLegibility;
	text-align: center;
	font-size: 3rem;
	line-height: 1.1;

	&.active {
		color: #f3ff9de6;
		background-color: black;
	}
`

export default Media
