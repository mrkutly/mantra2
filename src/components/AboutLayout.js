import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
	margin: 100px auto;
	display: grid;
	grid-template-rows: 3vh 10vh 5fr;

	@media (max-width: 450px) {
		max-width: 1300px;
		margin: 50px auto;
	}
`

const NavBar = styled.div`
	line-height: 3em;
	grid-row-start: 2;

	@media (max-width: 500px) {
		max-width: 360px;
		margin: 30px auto;
	}

	a {
		color: black;
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

	:hover {
		border-bottom: 1px solid lightgreen;
	}
	@media screen and (max-width: 500px) {
		font-size: 1.7rem;
		display: block;
		text-align: center;
	}
	a.active {
		text-shadow: 3px 3px lightblue, 6px 6px lightpink;
	}
`

const BandMember = styled.span`
	display: inline-block;
	margin: 0 20px;
	font-weight: 200;
	letter-spacing: 2px;
	font-size: 1.5em;
	cursor: pointer;

	:hover {
		border-bottom: 1px solid lightgreen;
	}
	a.active {
		font-weight: 550;
		text-shadow: 3px 3px lightblue, 6px 6px lightpink;
	}
`

const Divider = styled.span`
	font-size: 1.5em;
`

export default Layout
