import { keyframes } from "styled-components"
import colors from "./colors"

export const colorChange = keyframes`
   0% {
      color: ${colors.lightpink};
   }
   10% {
      color: ${colors.yellow};
   }
   20% {
      color: ${colors.lightblue};
   }
   30% {
      color: ${colors.green};
   }
   40% {
      color: ${colors.peach};
   }
   50% {
      color: ${colors.lightpink};
   }
   60% {
      color: ${colors.yellow};
   }
   70% {
      color: ${colors.lightblue};
   }
   80% {
      color: ${colors.green};
   }
   90% {
      color: ${colors.peach};
   }
   100% {
      color: ${colors.lightpink};
   }
`

export const borderBottomColorChange = keyframes`
   0% {
      border-bottom: 2px solid ${colors.lightpink};
   }
   10% {
      border-bottom: 2px solid ${colors.yellow};
   }
   20% {
      border-bottom: 2px solid ${colors.lightblue};
   }
   30% {
      border-bottom: 2px solid ${colors.green};
   }
   40% {
      border-bottom: 2px solid ${colors.peach};
   }
   50% {
      border-bottom: 2px solid ${colors.lightpink};
   }
   60% {
      border-bottom: 2px solid ${colors.yellow};
   }
   70% {
      border-bottom: 2px solid ${colors.lightblue};
   }
   80% {
      border-bottom: 2px solid ${colors.green};
   }
   90% {
      border-bottom: 2px solid ${colors.peach};
   }
   100% {
      border-bottom: 2px solid ${colors.lightpink};
   }
`
export const fadeIn = keyframes`
	from {
		opacity: 0.1;
		transform: perspective(60em) translateZ(-20px);
	}
	to {
		opacity: 1;
		transform: perspective(60em) translateZ(0px);
   }
`
