import React from "react"
import styled from "styled-components"
import { fadeIn } from "../styles/animations"

export default ({ video }) => {
	return (
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
}

const VideoPlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	position: -webkit-sticky;
	position: sticky;
	float: right;
	top: 25%;
	width: 560px;
	height: 315px;

	@media (max-width: 900px) {
		max-width: 560px;
		width: 100%;
		margin: 0 auto;
		top: 70px;
		float: none;
		align-self: start;
		justify-self: center;
	}
`
