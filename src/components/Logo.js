import React from "react"
import styled from "styled-components"
import logo from "../images/mantra-logo.png"

const LogoImageStyles = styled.img`
	animation: 0.8s logo-zoom-in ease-out;
	grid-row-start: 2;
	margin: auto;
	filter: invert(1);

	&:hover {
		animation: 0.8s shrink ease-out;
		transform: perspective(60em) translateZ(-50px);
	}

	@keyframes shrink {
		from {
			transform: perspective(60em) translateZ(0px);
		}
		to {
			transform: perspective(60em) translateZ(-50px);
		}
	}

	@keyframes logo-zoom-in {
		from {
			transform: perspective(60em) translateZ(-50px);
		}
		to {
			transform: perspective(60em) translateZ(0px);
		}
	}

	@media screen and (max-width: 500px) {
		width: 300px;
		margin-top: 25%;
	}
`

const LogoImage = () => <LogoImageStyles src={logo} alt="mantra logo" />

export default LogoImage
