import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"

const SpotifyPlayer = ({ album }: PlayerProps) => (
	<AlbumPlayerStyles className="spotify">
		<iframe
			loading="lazy"
			title={`${album.title}`}
			src={`${album.url}`}
			frameBorder="0"
			allowTransparency={true}
			allow="encrypted-media"
		/>
	</AlbumPlayerStyles>
)

export default SpotifyPlayer
