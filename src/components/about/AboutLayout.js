import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { borderBottomColorChange } from "../styles/animations"
import colors from "../styles/colors"

const Layout = props => {
	return (
		<Container>
			<NavBar>
				<Band>
					<Link
						to="/about"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
						partiallyActive={false}
					>
						| mantra percussion |
					</Link>
				</Band>
				<BandMember>
					<Link
						to="/about/al"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						al
					</Link>
				</BandMember>
				<Divider>|</Divider>
				<BandMember>
					<Link
						to="/about/chris"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						chris
					</Link>
				</BandMember>
				<Divider>|</Divider>
				<BandMember>
					<Link
						to="/about/joe"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						joe
					</Link>
				</BandMember>
				<Divider>|</Divider>
				<BandMember>
					<Link
						to="/about/mark"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						mark
					</Link>
				</BandMember>
				<Divider>|</Divider>
				<BandMember>
					<Link
						to="/about/mike"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						mike
					</Link>
				</BandMember>
				<Divider>|</Divider>
			</NavBar>
			<Content>{props.children}</Content>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1300px;
	margin: 70px auto;
	display: grid;
	grid-template-rows: 3vh 10vh 5fr;

	@media (max-width: 900px) {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
`

const NavBar = styled.div`
	line-height: 3em;
	grid-row-start: 2;

	@media (max-width: 900px) {
		max-width: 360px;
		margin: 30px auto;
		text-align: center;
	}

	a {
		color: ${colors.black};
	}
`
const Content = styled.div`
	grid-row-start: 3;
`

const Band = styled.span`
	display: inline-block;
	font-weight: bold;
	font-size: 2em;
	cursor: pointer;

	@media screen and (max-width: 500px) {
		font-size: 1.7rem;
		display: block;
		text-align: center;
	}

	a {
		display: inline-block;
	}
	a.active,
	a:hover {
		animation: ${borderBottomColorChange} 2.5s linear infinite;
	}
`

const BandMember = styled.span`
	display: inline-block;
	margin: 0 20px;
	font-weight: 200;
	letter-spacing: 2px;
	font-size: 1.5em;
	cursor: pointer;

	a {
		display: inline-block;
	}

	a.active,
	a:hover {
		font-weight: 550;
		animation: ${borderBottomColorChange} 2.5s linear infinite;
	}
`

const Divider = styled.span`
	font-size: 1.5em;

	@media (max-width: 900px) {
		display: none;
	}
`

export default Layout
