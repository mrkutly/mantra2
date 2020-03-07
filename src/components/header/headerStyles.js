import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import colors from "../styles/colors"
import { colorChange } from "../styles/animations"

export const DesktopStyles = styled.span`
	@media (max-width: 870px) {
		display: none;
	}
`

export const MobileStyles = styled.div`
	@media (min-width: 871px) {
		display: none;
	}

	&.open {
		display: block;
		position: fixed;
		z-index: 999;
		top: 0px;
		right: 0px;
		background-color: ${colors.black};
		width: 100%;
		height: 100vh;
		flex-direction: column;
	}

	.open-button {
		margin: 0 20px;
		position: absolute;
		right: 0;
	}

	.open-button.is-open {
		transform: translateY(20px);
	}

	.bar {
		width: 32px;
		height: 2px;
		margin: 6px 0px;
		background-color: ${colors.peach};
		transform: rotate(-180deg);
		transition: all 0.15s ease 0s;
		transform-origin: bottom-left;
	}

	.bar1 {
		transform: rotate(45deg) translate(7px, 4px);
	}
	.bar2 {
		transform: rotate(0deg);
		opacity: 0;
	}
	.bar3 {
		transform: rotate(-45deg) translate(7px, -4px);
	}
`

export const MobileLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	line-height: 2em;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover,
	&:focus,
	&.active {
		animation: ${colorChange} 2.5s linear infinite;
		letter-spacing: 2px;
	}
`

export const MobileLinksGrid = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5rem;
	text-align: center;
`

export const DeskTopLink = styled(TransitionLink)`
	display: inline-block;
	background: transparent;
	padding-bottom: 10px;
	margin: 5px 0 5px 3vw;
	cursor: pointer;
	text-decoration: none;
	font-weight: 700;
	${(props) => props.isHomePage ? 
		`color: white;
		text-shadow: 3px 3px 3px black;`
		:
		`color: black;`
	}
	

	&:hover {
		border-bottom: solid 1px ${colors.lightblue};
		padding-bottom: 9px;
		color: ${colors.green};
	}

	&.active {
		border-bottom: solid 1px ${colors.green};
		padding-bottom: 9px;
		color: ${colors.lightblue};
	}
`

export const StyledNavBar = styled.header`
	line-height: 2em;
	padding-top: 20px;
	z-index: 2;
	min-height: 40px;

	/* a {
		
		transition: max-width 2s cubic-bezier(0.075, 0.82, 0.165, 1);
	} */

	@media screen and (min-width: 768px) {
		padding-bottom: 24px;
		background: transparent;
	}

	@media screen and (max-width: 500px) {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 18px 0;
		line-height: 1em;
		padding-bottom: 10px;
	}
`
