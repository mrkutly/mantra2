import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

export default ({ album, play }) => {
	return (
		<AlbumTitleContainer
			onClick={(e) => play(album)}
			onKeyPress={(e) => e.which === 13 && play(album)}
			tabIndex={0}
		>
			<h1>{album.title}</h1>
		</AlbumTitleContainer>
	)
}

const AlbumTitleContainer = styled.div`
	cursor: pointer;
	max-width: 95vh;
	text-decoration: none;
	color: white;
	text-shadow: 2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black;

	h1 {
		transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	&:focus h1,
	h1:hover {
		letter-spacing: 4px;
		color: ${colors.green};
	}
`
