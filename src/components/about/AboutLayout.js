import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { borderBottomColorChange } from "../styles/animations"

const bandMemberLinks = [
	{
		href: "/bios/al",
		text: "al",
	},
	{
		href: "/bios/chris",
		text: "chris",
	},
	{
		href: "/bios/joe",
		text: "joe",
	},
	{
		href: "/bios/mark",
		text: "mark",
	},
	{
		href: "/bios/mike",
		text: "mike",
	},
]

const Layout = (props) => {
	return (
		<Container>
			<NavBar>
				<Band>
					<Link
						to="/bios/"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
						partiallyActive={false}
					>
						| mantra percussion |
					</Link>
				</Band>
				{bandMemberLinks.map((member) => (
					<>
						<BandMember>
							<Link
								to={member.href}
								style={{ textDecoration: "none" }}
								activeClassName={"active"}
							>
								{member.text}
							</Link>
						</BandMember>
						<Divider>|</Divider>
					</>
				))}
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
		max-width: 400px;
		margin: 30px auto;
		text-align: center;
	}

	a {
		color: white;
		text-shadow: 1px 1px black, 1px -1px black, -1px 1px black, -1px -1px black;
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
		font-weight: 250;
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
