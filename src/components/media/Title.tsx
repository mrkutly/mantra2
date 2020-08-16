import React from "react"
import { MediaTitle } from "../styles"
import { Video, Album } from "../../types"

interface TitleProps {
	play: (vid: Video | Album) => void
	media: Video | Album
}

const Title = ({ play, media }: TitleProps) => (
	<MediaTitle
		onClick={() => play(media)}
		onKeyPress={({ key }) => key === "Enter" && play(media)}
		tabIndex={0}
	>
		{media.title}
	</MediaTitle>
)

export default Title
