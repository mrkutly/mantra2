import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "./styles/colors"

const Navbar = () => {
	return (
		<StyledNavBar>
			<StyledLink activeClassName="active" to="/">
				Home
			</StyledLink>
			<StyledLink activeClassName="active" to="/about" partiallyActive={true}>
				About
			</StyledLink>
			<StyledLink activeClassName="active" to="/calendar">
				Calendar
			</StyledLink>
			<StyledLink activeClassName="active" to="/press">
				Press
			</StyledLink>
			<StyledLink activeClassName="active" to="/videos">
				Video
			</StyledLink>
			<StyledLink activeClassName="active" to="/discography">
				Discography
			</StyledLink>
			<StyledLink
				activeClassName="active"
				to="/mantrayouth"
				partiallyActive={true}
			>
				Mantra Youth Percussion
			</StyledLink>
			<StyledLink activeClassName="active" to="/contact">
				Contact
			</StyledLink>
		</StyledNavBar>
	)
}

const StyledLink = styled(Link)`
	display: inline-block;
	background: white;
	padding-bottom: 10px;
	margin: 5px 0 5px 3vw;
	cursor: pointer;
	text-decoration: none;
	font-weight: 600;
	color: ${colors.grey};

	:hover {
		border-bottom: solid 1px ${colors.lightblue};
		color: ${colors.black};
	}

	&.active {
		border-bottom: solid 1px ${colors.green};
		color: ${colors.black};
	}
`

const StyledNavBar = styled.header`
	line-height: 2em;
	margin-top: 5px;
	z-index: 2;

	a {
		/* max-width: ${props => (props.hidden ? "0px" : "20px")}; */
		overflow: hidden;
		transition: max-width 2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	@media screen and (min-width: 768px) {
		padding-bottom: 24px;
		position: sticky;
		-webkit-position: -webkit-sticky;
		top: 0;
		background: white;
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

export default Navbar
