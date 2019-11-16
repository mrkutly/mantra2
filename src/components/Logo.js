import React from "react"
import styled from "styled-components"
import logo from "../images/mantra-logo.png"

const LogoImageStyles = styled.img`
	animation: 0.8s logo-zoom-in ease-out;
	grid-row-start: 2;
	margin: auto;
	filter: invert(1);

	&.hover {
		animation: 2s pulse ease-out infinite;
	}

	@keyframes pulse {
		from {
			transform: perspective(60em) translateZ(0px);
		}
		50% {
			transform: perspective(60em) translateZ(-50px);
		}
		to {
			transform: perspective(60em) translateZ(0px);
		}
	}

	@keyframes logo-zoom-in {
		from {
			opacity: 0.1;
			transform: perspective(60em) translateZ(-50px);
		}
		to {
			opacity: 1;
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
