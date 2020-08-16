import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Title from "./Title"
import AlbumPlayer from "./AlbumPlayer"
import VideoPlayer from "./VideoPlayer"
import { Album, MediaTypes, Video } from "../../types"

interface MediaProps {
	videos: Video[]
	albums: Album[]
	type: MediaTypes
}

const MediaIndex = ({ albums, videos, type }: MediaProps) => {
	let defaultMedia

	if (type === MediaTypes.VIDEOS) {
		defaultMedia = videos.find(vid => vid.title.includes("Squarepusher"))
	} else {
		defaultMedia = albums.find(vid => vid.title.includes("Great Many"))
	}

	const [active, setActive] = useState<Video | Album>(defaultMedia)
	const mapped = (type === MediaTypes.VIDEOS
		? videos
		: albums
	).map((entity, i) => (
		<Title play={setActive} media={entity} key={`${entity.title}-${i}`} />
	))

	useEffect(() => {
		if (active !== defaultMedia) {
			setActive(defaultMedia)
		}
	}, [type])

	return (
		<Index type={type}>
			{type === MediaTypes.ALBUMS && <AlbumPlayer album={active as Album} />}
			{type === MediaTypes.VIDEOS && <VideoPlayer video={active as Video} />}
			<div className="media-index">{mapped}</div>
		</Index>
	)
}

const Index = styled.div<{ type: MediaTypes }>`
	height: 75vh;
	overflow: scroll;
	display: grid;
	grid-template-columns: ${({ type }) =>
			type === MediaTypes.ALBUMS ? "400px" : "600px"} 1fr;
	grid-gap: 10px;

	.media-index {
		overflow: scroll;
		height: 100%;
	}

	@media screen and (max-width: 1000px) {
		display: block;

		.media-index {
			margin-top: 60px;
			overflow: initial;
			height: auto;
		}
	}
`

export default MediaIndex
