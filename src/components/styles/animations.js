import { keyframes } from 'styled-components'
import colors from './colors'

const makeColorAnimation = property => keyframes`
   0% {
     ${property} ${colors.lightpink};
   }
   10% {
      ${property}: ${colors.yellow};
   }
   20% {
      ${property}: ${colors.lightblue};
   }
   30% {
      ${property}: ${colors.green};
   }
   40% {
      ${property}: ${colors.peach};
   }
   50% {
      ${property}: ${colors.lightpink};
   }
   60% {
      ${property}: ${colors.yellow};
   }
   70% {
      ${property}: ${colors.lightblue};
   }
   80% {
      ${property}: ${colors.green};
   }
   90% {
      ${property}: ${colors.peach};
   }
   100% {
      ${property}: ${colors.lightpink};
   }
`

export const colorChange = makeColorAnimation('color')

export const backgroundChange = makeColorAnimation('background')

export const borderColorChange = makeColorAnimation('border-color')

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
