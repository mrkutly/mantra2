import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "./styles/colors"

const Navbar = () => {
	return (
		<StyledNavBar>
			<StyledLink activeClassName="active" to="/">
				Home
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/about" partiallyActive={true}>
				About
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/calendar">
				Calendar
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/press">
				Press
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/videos">
				Video
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/discography">
				Discography
			</StyledLink>
			\\
			<StyledLink activeClassName="active" to="/mantrayouth">
				Mantra Youth Percussion
			</StyledLink>
			\\
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
	margin: 5px 15px;
	cursor: pointer;
	text-decoration: none;
	font-weight: 600;
	color: ${colors.black};

	:hover {
		border-bottom: solid 1px ${colors.lightblue};
	}

	&.active {
		border-bottom: solid 1px ${colors.green};
	}
`

const StyledNavBar = styled.header`
	border-bottom: 1px solid ${colors.black};
	line-height: 2em;
	margin-top: 5px;
	z-index: 2;

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
