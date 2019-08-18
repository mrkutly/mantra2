import styled from "styled-components"
import { fadeIn } from "../styles/animations"

const PlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	float: right;
	margin-right: 20px;

	@media (max-width: 700px) {
		max-height: 400px;
		width: 375px;
		overflow: scroll;
		display: block;
		margin: 10vh auto;
		float: none;
	}
`

export default PlayerStyles
