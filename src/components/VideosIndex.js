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
		<VideoPageStyles>
			<VideoPlayer video={activeVideo} />
			<VideoIndexStyles>
				<TitleContainerStyles>{mappedVids}</TitleContainerStyles>
			</VideoIndexStyles>
		</VideoPageStyles>
	)
}

const VideoIndexStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

const TitleContainerStyles = styled.div`
	grid-column-start: 1;
	grid-row-start: 1;
`

const VideoPageStyles = styled.div`
	@media (max-width: 800px) {
		display: grid;
	}
`
