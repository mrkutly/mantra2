import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { borderColorChange, colorChange, backgroundChange, fadeIn } from './animations';


export const AlbumPlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	box-shadow: var(--pink-shadows);
	margin: 0 auto;
	
	&.apple, &.apple iframe {
		height: 450px;
		width: 320px;
	}

	&.bandcamp, &.bandcamp iframe {
		width: 290px;
		height: 290px;
	}
	
	&.spotify, &.spotify iframe {
		width: 300px;
		height: 380px;
	}
	
	&.wnyc, &.wnyc iframe {
		height: 130px;
		width: 100%;
	}
	
	@media screen and (min-width: 500px) { 
		&.apple, &.spotify {
			max-height: 70vh;
			overflow: scroll;
		}


		&.bandcamp, &.bandcamp iframe {
			width: 350px;
			height: 350px;
		}
	}
`;

export const FullScreenCard = styled.div<{ background: string; color?: string; }>`
	scroll-snap-align: start;
	padding: 32px;
	background: ${({ background }) => background};
	color: ${({ color }) => color ?? 'black'};
	display: grid;
	min-height: 100vh;
	margin-top: 100vh;
	position: relative;

	p.split {
		margin: auto;

		&:after {
			content: '';
			display: block;
			width: 50vw;
			background: #0065ff4f;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			z-index: -1;
		}

		&:before {
			content: '';
			display: block;
			width: 50vw;
			background: #f200004f;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
	}
`;

const linkStyles = css`
	color: inherit;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease;
	border-bottom: 4px solid transparent;
	font-weight: 600;


	&:hover {
		animation: ${borderColorChange} 2.5s linear infinite,
			${colorChange} 2.5s linear infinite;
	}

	&:focus {
		border-color: var(--pink);
		outline: 2px solid var(--pink);
		outline-offset: 4px;
	}

	&:active {
		background: var(--black);
	}
`;
export const Link = styled.a`
	${linkStyles}
`;
export const PageLink = styled(GatsbyLink)`
	${linkStyles}
`;

export const Button = styled.button`
	padding: 2px 8px;
	background: transparent;
	color: white;
	font-weight: 600;
	border: 2px solid var(--pink);
	border-radius: 50px;
	transition: all 0.3s ease;

	&:hover {
		animation: ${borderColorChange} 2.5s linear infinite,
			${backgroundChange} 2.5s linear infinite;
		color: black;
		cursor: pointer;
	}

	&:focus {
		box-shadow: 0 0 6px var(--green);
	}
`;


export const ImageContainer = styled.div<{ width: string; }>`
	float: left;
	width: ${({ width }) => width};
	margin: 0 50px 50px 0;
	box-shadow: var(--blue-shadows);

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export const MediaTitle = styled.p`
	font-weight: 600;
	font-size: 1.4rem;
	margin-top: 20px;
	color: rgb(135, 86, 214);
`;
