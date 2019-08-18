import React from "react"
import BandcampPlayer from "./BandcampPlayer"
import ApplePlayer from "./ApplePlayer"
import SpotifyPlayer from "./SpotifyPlayer"

export default ({ album }) => {
	switch (album.host) {
		case "apple":
			return <ApplePlayer album={album} />

		case "spotify":
			return <SpotifyPlayer album={album} />

		default:
			return <BandcampPlayer album={album} />
	}
}
