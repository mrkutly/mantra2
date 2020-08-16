import React from "react"
import styled from "styled-components"
import { fadeIn } from "../styles/animations"
import { PlayerProps } from "./mediaTypes"

const VideoPlayer = ({ video }: PlayerProps) => (
	<VideoPlayerStyles>
		<iframe
			title={video.title}
			width="100%"
			height="100%"
			src={`${video.url}`}
			style={{ background: "black" }}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</VideoPlayerStyles>
)

const VideoPlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	box-shadow: var(--pink-shadows);
	margin: 0 auto;
	width: 277px;
	height: 177px;

	@media screen and (min-width: 580px) {
		width: 450px;
		height: 310px;
	}

	@media screen and (min-width: 700px) {
		margin-right: auto;
		margin-left: 0;
		width: 560px;
		height: 340px;
	}
`

export default VideoPlayer
