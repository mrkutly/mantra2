import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
	DeskTopLink,
	MobileLink,
	StyledNavBar,
	DesktopStyles,
	MobileStyles,
	MobileLinksGrid,
} from "./headerStyles.js"

interface NavProps {
	isHomePage: boolean
}

const Navbar = ({ isHomePage }: NavProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const site = useStaticQuery(graphql`
		query {
			allSite {
				edges {
					node {
						siteMetadata {
							navLinks {
								id
								href
								display
								partial
							}
						}
					}
				}
			}
		}
	`)

	const desktopLinks = site.allSite.edges[0].node.siteMetadata.navLinks.map(
		link => (
			<DeskTopLink
				isHomePage={isHomePage}
				key={link.id}
				activeClassName="active"
				to={link.link}
				partiallyActive={link.partial}
				cover
				direction="up"
				bg={isHomePage ? "#ffffff" : "#000000"}
			>
				{link.name}
			</DeskTopLink>
		)
	)

	const mobileLinks = site.allSite.edges[0].node.siteMetadata.navLinks.map(
		link => (
			<MobileLink
				key={link.id}
				activeClassName="active"
				to={link.link}
				partiallyActive={link.partial}
			>
				{link.name}
			</MobileLink>
		)
	)

	return (
		<StyledNavBar>
			<DesktopStyles>{desktopLinks}</DesktopStyles>
			<MobileStyles className={isOpen && "open"}>
				<div
					className={isOpen ? "open-button is-open" : "open-button"}
					onClick={e => setIsOpen(!isOpen)}
					onKeyPress={e => e.key === "Enter" && setIsOpen(!isOpen)}
					role="button"
					tabIndex="0"
				>
					<div className={isOpen ? "bar bar1" : "bar"}></div>
					<div className={isOpen ? "bar bar2" : "bar"}></div>
					<div className={isOpen ? "bar bar3" : "bar"}></div>
				</div>
				{isOpen && <MobileLinksGrid>{mobileLinks}</MobileLinksGrid>}
			</MobileStyles>
		</StyledNavBar>
	)
}

export default Navbar
