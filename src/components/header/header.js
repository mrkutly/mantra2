import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const site = useStaticQuery(graphql`
		query {
			allSite {
				edges {
					node {
						siteMetadata {
							navbarLinks {
								id
								link
								name
								partial
							}
						}
					}
				}
			}
		}
	`)

	const desktopLinks = site.allSite.edges[0].node.siteMetadata.navbarLinks.map(
		link => (
			<DeskTopLink
				key={link.id}
				activeClassName="active"
				to={link.link}
				partiallyActive={link.partial}
			>
				{link.name}
			</DeskTopLink>
		)
	)

	const mobileLinks = site.allSite.edges[0].node.siteMetadata.navbarLinks.map(
		link => (
			<MobileLink key={link.id} to={link.link}>
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
