import React from "react"
import styled from "styled-components"
import { fadeIn } from "../styles/animations"

interface VideoPlayerProps {
	video: Video
}

const VideoPlayer = ({ video }: VideoPlayerProps) => (
	<VideoPlayerStyles>
		<iframe
			title={video.title}
			width="100%"
			height="100%"
			src={`${video.url}`}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</VideoPlayerStyles>
)

const VideoPlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	box-shadow: var(--blue-shadows);
	max-width: 560px;
`

export default VideoPlayer
