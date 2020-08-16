import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"

const ApplePlayer = ({ album }: PlayerProps) => (
	<AlbumPlayerStyles className="apple">
		<iframe
			loading="lazy"
			title={`${album.title}`}
			allow="autoplay *; encrypted-media *;"
			frameBorder="0"
			height="450"
			style={{
				overflow: "hidden",
			}}
			sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
			src={`${album.url}`}
		/>
	</AlbumPlayerStyles>
)

export default ApplePlayer
