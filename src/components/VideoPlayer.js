import React from "react"
import styled from "styled-components"
import { fadeIn } from "./styles/animations"

export default ({ video }) => {
	return (
		<VideoPlayerStyles>
			<iframe
				title={video.title}
				width="560"
				height="315"
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

	@media (max-width: 800px) {
		align-self: start;
		justify-self: center;
	}
`
