import React, { useState } from "react"
import styled from "styled-components"
import VideoTitle from "./VideoTitle"
import VideoPlayer from "./VideoPlayer"

export default props => {
	const [activeVideo, setActiveVideo] = useState({
		title: "Squarepusher: Timber Remixed",
		url: "https://www.youtube.com/embed/Q6E5Q82vR30",
	})

	const mappedVids = props.videos.map((video, i) => (
		<VideoTitle play={setActiveVideo} video={video} key={`video-${i}`} />
	))

	return (
		<>
			<VideoPlayer video={activeVideo} />
			<VideoIndexStyles>
				<div>{mappedVids}</div>
			</VideoIndexStyles>
		</>
	)
}

const VideoIndexStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-right: 560px;

	@media (max-width: 900px) {
		display: block;
		margin-right: 0;
	}
`
