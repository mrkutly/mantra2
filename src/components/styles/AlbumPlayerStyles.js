import styled from "styled-components"
import { fadeIn } from "./animations"

const PlayerStyles = styled.div`
	animation: 0.8s ${fadeIn} ease-in;
	float: right;
	margin-right: 20px;

	@media (max-width: 500px) {
		position: relative;
		max-height: 400px;
		width: 375px;
		overflow: scroll;
		margin-right: -12.5px;
		margin-bottom: 10px;
	}
`

export default PlayerStyles
