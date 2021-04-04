/* eslint-disable react/no-this-in-sfc */
/* eslint-disable lines-between-class-members */
import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import imgSrc from './backgroundText'

const calculateBrightness = (red: number, green: number, blue: number) =>
	Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue + 0.1114) /
	100

const BackgroundVideo = () => {
	const [canvasWidth, setCanvasWidth] = useState(0)
	const [drawn, setDrawn] = useState(false)
	const canvasRef = useRef<HTMLCanvasElement>()
	const canvasHeight = (144 / 723) * canvasWidth

	useEffect(() => {
		const windowWidth = window.innerWidth
		if (windowWidth < 723) setCanvasWidth(windowWidth)
		else setCanvasWidth(723)
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		let animationFrameID

		if (canvas && canvasWidth > 0 && !drawn) {
			const image = new Image()
			image.src = imgSrc
			image.addEventListener('load', () => {
				const ctx = canvas.getContext('2d')
				canvas.width = canvasWidth
				canvas.height = canvasHeight

				ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
				const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
				ctx.clearRect(0, 0, canvas.width, canvas.height)

				const brightnessMap: number[][] = []

				for (let y = 0; y < canvas.height; y += 1) {
					const row = []
					for (let x = 0; x < canvas.width; x += 1) {
						const redIdx = y * 4 * pixels.width + x * 4
						const red = pixels.data[redIdx]
						const green = pixels.data[redIdx + 1]
						const blue = pixels.data[redIdx + 2]
						const brightness = calculateBrightness(red, green, blue)
						row.push(brightness)
					}
					brightnessMap.push(row)
				}

				class Particle {
					x: number
					y: number
					position1: number
					position2: number
					speed: number
					velocity: number
					size: number

					constructor() {
						this.x = Math.random() * canvas.width
						this.y = 0
						this.speed = 0
						this.velocity = Math.random() * 0.5
						this.size = 1.5 + 1
					}

					update() {
						const position1 = Math.floor(this.y)
						const position2 = Math.floor(this.x)
						this.speed = brightnessMap[position1][position2]
						const movement = 3.2 - this.speed + this.velocity
						this.y += movement
						if (this.y >= canvas.height) {
							this.y = 0
							this.x = Math.random() * canvas.width
						}
					}

					draw() {
						ctx.beginPath()
						ctx.fillStyle = 'white'
						ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
						ctx.fill()
					}
				}

				const particleCount = 5000
				const particles = []
				for (let i = 0; i < particleCount; i += 1) {
					particles.push(new Particle())
				}

				const animate = () => {
					ctx.globalAlpha = 0.05
					ctx.fillStyle = 'rgb(0, 0, 0)'
					ctx.fillRect(0, 0, canvas.width, canvas.height)
					ctx.globalAlpha = 0.2
					for (let i = 0; i < particles.length; i += 1) {
						const p = particles[i]
						p.update()
						ctx.globalAlpha = p.speed / 2
						p.draw()
					}
					return requestAnimationFrame(animate)
				}
				animationFrameID = animate()
			})

			setDrawn(true)

			return () => cancelAnimationFrame(animationFrameID)
		}
	}, [canvasHeight, canvasWidth, drawn])

	return (
		<BackgroundStyles canvasWidth={canvasWidth} canvasHeight={canvasHeight}>
			<canvas ref={canvasRef}></canvas>
			<div className="timber-round">
				<div id="bar-1"></div>
				<div id="bar-2"></div>
				<div id="bar-3"></div>
				<div id="bar-4"></div>
				<div id="bar-5"></div>
				<div id="bar-6"></div>
			</div>
		</BackgroundStyles>
	)
}

const dim = keyframes`
	from {
		opacity: 0;
	}

	30% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	70% {
		opacity: 0;
	}

	to {
		opacity: 0;
	}
`

const BackgroundStyles = styled.div<{
	canvasWidth: number
	canvasHeight: number
}>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0%;
	z-index: -1;

	canvas {
		width: ${p => p.canvasWidth}px;
		height: ${p => p.canvasHeight}px;
		position: absolute;
		top: 40%;
		left: 50%;
		translate: -50%;
	}

	img {
		width: 100%;
	}

	.timber-round {
		position: absolute;
		top: 48%;
		left: 50%;
		translate: -50%;

		div {
			width: 500px;
			height: 5px;
			background: white;
			opacity: 0;
		}

		#bar-1 {
			transform: rotate(150deg) translate(-352px, -15px);
			animation: ${dim} 6s infinite;
		}
		#bar-2 {
			transform: rotate(90deg) translate(-344px, -9px);
			animation: ${dim} 6s infinite;
			animation-delay: 1s;
		}
		#bar-3 {
			transform: rotate(30deg) translate(-342px, -4px);
			animation: ${dim} 6s infinite;
			animation-delay: 2s;
		}
		#bar-4 {
			transform: rotate(-30deg) translate(-338px, 1px);
			animation: ${dim} 6s infinite;
			animation-delay: 3s;
		}
		#bar-5 {
			transform: rotate(-90deg) translate(-339px, 9px);
			animation: ${dim} 6s infinite;
			animation-delay: 4s;
		}
		#bar-6 {
			transform: rotate(30deg) translate(350px, -17px);
			animation: ${dim} 6s infinite;
			animation-delay: 5s;
		}
	}

	@media screen and (max-width: 600px) {
		.timber-round {
			top: 43%;
		}
	}
`

export default BackgroundVideo
