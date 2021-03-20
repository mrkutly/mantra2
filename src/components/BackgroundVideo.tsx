import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './styles'
import TimberVideo from '../videos/timber-logo.mp4'
import TimberPoster from '../images/timber-poster.png'

const autoplayKey = 'autoplay'
const accessibiltyPromptedKey = 'accessibilityPrompted'

const BackgroundVideo = () => {
	const [autoplay, setAutoplay] = useState('false')
	const [prompted, setPrompted] = useState('false')

	useEffect(() => {
		const autoplayCache = localStorage.getItem(autoplayKey)
		if (autoplayCache) setAutoplay(autoplayCache)
		const promptedCache = localStorage.getItem(accessibiltyPromptedKey)
		if (promptedCache) setPrompted(promptedCache)
	}, [])

	const handleAutoplayDecision = useCallback(
		shouldAutoplay => {
			setAutoplay(shouldAutoplay)
			setPrompted('true')
			localStorage.setItem(autoplayKey, shouldAutoplay)
			localStorage.setItem(accessibiltyPromptedKey, 'true')
		},
		[setAutoplay, setPrompted]
	)

	if (prompted === 'false') {
		return (
			<PromptStyles>
				<div>
					<h1>Hi! Thanks for checking out our organization</h1>
					<p>
						We have some performance video that plays in the background of this
						site that contains some <strong>flashing lights</strong>. If you
						have any sort of conditions that are triggered by flashing lights,
						you should disable the video by clicking the <b>No</b> button below.
					</p>
					<p>
						<strong>Would you like to allow the video to play?</strong>
					</p>
					<Button type="button" onClick={() => handleAutoplayDecision('true')}>
						Yes, play the video
					</Button>
					<Button type="button" onClick={() => handleAutoplayDecision('false')}>
						No, do not play video
					</Button>
				</div>
			</PromptStyles>
		)
	}

	return (
		<BackgroundStyles>
			<video
				playsInline
				autoPlay={autoplay === 'true'}
				muted
				loop
				poster={TimberPoster}
				id="bgvid"
			>
				<source src={TimberVideo} type="video/mp4" />
			</video>
		</BackgroundStyles>
	)
}

const BackgroundStyles = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	z-index: -1;

	video {
		margin: auto;
		width: 100%;
	}
`

const PromptStyles = styled.div`
	background: black;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	display: grid;
	position: fixed;
	top: 0;
	left: 0;

	div {
		margin: auto;
		max-width: 700px;
	}

	button {
		margin-right: 20px;
	}
`

export default BackgroundVideo
