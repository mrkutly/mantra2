import React from "react"
import styled from "styled-components"
import colors from "./styles/colors"

export default props => {
	const { video } = props

	const playVideo = ({ e, video }) => {
		e.preventDefault()
		props.play(video)
	}

	return (
		<VideoTitleContainer onClick={e => props.play(video)}>
			<a href="/video" onClick={e => playVideo({ e, video })}>
				<h1>{props.video.title}</h1>
			</a>
		</VideoTitleContainer>
	)
}

const VideoTitleContainer = styled.div`
	grid-column-start: 1;
	cursor: pointer;

	a {
		text-decoration: none;
		color: ${colors.black};
	}

	h1:hover {
		color: rgb(135, 86, 214);
	}
`
