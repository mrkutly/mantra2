import React from "react"
import styled from "styled-components"
import colors from "./styles/colors"

export default props => {
	const { video } = props

	return (
		<VideoTitleContainer onClick={e => props.play(video)}>
			<h1>{props.video.title}</h1>
		</VideoTitleContainer>
	)
}

const VideoTitleContainer = styled.div`
	cursor: pointer;
	color: ${colors.black};

	&:nth-of-type(1) {
		margin-top: 10vh;
	}

	h1 {
		transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	h1:hover {
		letter-spacing: 4px;
		color: rgb(135, 86, 214);
	}
`
