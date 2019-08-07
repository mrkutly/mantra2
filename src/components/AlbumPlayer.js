import React from "react"
import BandcampPlayer from "./iframes/BandcampPlayer"
import ApplePlayer from "./iframes/ApplePlayer"
import SpotifyPlayer from "./iframes/SpotifyPlayer"

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
