import React from "react"
import AlbumPlayerStyles from "../styles/AlbumPlayerStyles"

const ApplePlayer = ({ album }) => {
	return (
		<AlbumPlayerStyles>
			<iframe
				title={`${album.title}`}
				allow="autoplay *; encrypted-media *;"
				frameBorder="0"
				height="450"
				style={{
					width: "100%",
					maxWidth: "660px",
					overflow: "hidden",
					background: "transparent",
				}}
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				src={`${album.url}`}
			/>
		</AlbumPlayerStyles>
	)
}

export default ApplePlayer
