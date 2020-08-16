import React from "react"
import BandcampPlayer from "./BandcampPlayer"
import ApplePlayer from "./ApplePlayer"
import SpotifyPlayer from "./SpotifyPlayer"
import { PlayerProps } from "./mediaTypes"

const AlbumPlayer = ({ album }: PlayerProps) => {
	switch (album.host) {
		case "apple":
			return <ApplePlayer album={album} />

		case "spotify":
			return <SpotifyPlayer album={album} />

		default:
			return <BandcampPlayer album={album} />
	}
}

export default AlbumPlayer
