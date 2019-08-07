import React from "react"
import AlbumPlayerStyles from "../styles/AlbumPlayerStyles"

const SpotifyPlayer = ({ album }) => {
	return (
		<AlbumPlayerStyles>
			<iframe
				title={`${album.title}`}
				src={`${album.url}`}
				width="300"
				height="380"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			/>
		</AlbumPlayerStyles>
	)
}

export default SpotifyPlayer
