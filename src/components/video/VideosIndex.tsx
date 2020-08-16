import React, { useState } from "react"
import styled from "styled-components"
import VideoTitle from "./VideoTitle"
import VideoPlayer from "./VideoPlayer"

interface VideosProps {
	videos: Video[]
}

const VideosIndex = ({ videos }: VideosProps) => {
	const defaultVideo = videos.find(vid => vid.title.includes("Squarepusher"))
	const [activeVideo, setActiveVideo] = useState<Video>(defaultVideo)

	const mappedVids = videos.map((video, i) => (
		<VideoTitle play={setActiveVideo} video={video} key={`video-${i}`} />
	))

	return (
		<VideoIndexStyles>
			<VideoPlayer video={activeVideo} />
			<div className="media-index">{mappedVids}</div>
		</VideoIndexStyles>
	)
}

const VideoIndexStyles = styled.div`
	height: 75vh;
	overflow: scroll;
	display: grid;
	grid-template-columns: 600px 1fr;

	.media-index {
		overflow: scroll;
		height: 100%;
	}
`

export default VideosIndex
