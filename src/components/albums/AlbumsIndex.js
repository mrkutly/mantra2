import React, { useState } from "react"
import AlbumTitle from "./AlbumTitle"
import AlbumPlayer from "./AlbumPlayer"

export default ({ albums }) => {
	const [album, playAlbum] = useState({
		title: "Aaron Siegel - A Great Many",
		height: "522px",
		url:
			"https://bandcamp.com/EmbeddedPlayer/album=1614447228/size=large/bgcol=ffffff/linkcol=333333/transparent=true/",
		href: "http://aaronsiegel.bandcamp.com/album/a-great-many",
	})
	const mappedAlbums = albums.map((album, i) => (
		<AlbumTitle album={album} key={`album-${i}`} play={playAlbum} />
	))

	return (
		<div style={{ marginTop: "8vh" }}>
			<AlbumPlayer album={album} />
			{mappedAlbums}
		</div>
	)
}
