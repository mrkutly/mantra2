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
		<VideoIndexStyles>
			<VideoPlayer video={activeVideo} />
			{mappedVids}
		</VideoIndexStyles>
	)
}

const VideoIndexStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 560px;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`
