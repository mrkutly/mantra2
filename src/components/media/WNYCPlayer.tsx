import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"

const WNYCPlayer = ({ album }: PlayerProps) => {
	return (
		<AlbumPlayerStyles className="wnyc">
			<iframe
				loading="lazy"
				title={`${album.title}`}
				scrolling="no"
				src={`${album.url}`}
			>
				<a href={`${album.href}`}>{album.title}</a>
			</iframe>
		</AlbumPlayerStyles>
	)
}

export default WNYCPlayer
