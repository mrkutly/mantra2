import React from "react"
import AlbumPlayerStyles from "./AlbumPlayerStyles"

const BandcampPlayer = ({ album }) => {
	return (
		<AlbumPlayerStyles>
			<iframe
				title={`${album.title}`}
				style={{ border: "0", width: "350px", height: album.height }}
				src={`${album.url}`}
				seamless
			>
				<a href={`${album.href}`}>{album.title}</a>
			</iframe>
		</AlbumPlayerStyles>
	)
}

export default BandcampPlayer
