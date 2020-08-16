import React from "react"
import styled from "styled-components"

interface VideoTitleProps {
	play: (vid: Video) => void
	video: Video
}
const VideoTitle = ({ play, video }) => (
	<VideoTitleContainer
		onClick={e => play(video)}
		onKeyPress={e => e.which === 13 && play(video)}
		tabIndex={0}
	>
		{video.title}
	</VideoTitleContainer>
)

const VideoTitleContainer = styled.div`
	cursor: pointer;
	font-weight: 600;
	font-size: 2rem;
	margin-top: 20px;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover,
	&:focus {
		letter-spacing: 4px;
		color: rgb(135, 86, 214);
	}
`

export default VideoTitle
