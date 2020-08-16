import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"

const BandcampPlayer = ({ album }: PlayerProps) => {
	return (
		<AlbumPlayerStyles className="bandcamp">
			<iframe
				title={`${album.title}`}
				style={{ border: "0" }}
				src={`${album.url}`}
				seamless
			>
				<a href={`${album.href}`}>{album.title}</a>
			</iframe>
		</AlbumPlayerStyles>
	)
}

export default BandcampPlayer
