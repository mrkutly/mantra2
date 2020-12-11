/* eslint-disable import/no-extraneous-dependencies */
import React, {
	KeyboardEventHandler,
	MutableRefObject,
	useRef,
	useState,
} from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { linkStyles, Link, PageLink } from './styles'
import { Site } from './Menu'

const SITE_QUERY = graphql`
	query {
		site {
			siteMetadata {
				navLinks {
					id
					href
					display
					partial
					isHash
				}
			}
		}
	}
`

const HeaderMenu = () => {
	const { pathname } = useLocation()
	const { navLinks } = useStaticQuery<Site>(SITE_QUERY).site.siteMetadata
	const [open, setOpen] = useState(false)
	const [active, _setActive] = useState(0)
	const refs = navLinks.map(useRef as () => MutableRefObject<any>)

	const setActive = (idx: number) => {
		refs[idx].current.focus()
		_setActive(idx)
	}

	const toggleOpen = () => setOpen(!open)
	const handleMenuKeyDown: KeyboardEventHandler = e => {
		if (['Enter', ' '].includes(e.key)) {
			if (!open) setActive(0)
			toggleOpen()
		}
	}
	const handleKeyDown: KeyboardEventHandler = e => {
		if (e.key.includes('Arrow')) e.preventDefault()

		if (e.key === 'ArrowUp' && active > 0) {
			const next = active - 1
			setActive(next)
			refs[next].current.focus()
		}

		if (e.key === 'ArrowDown' && active < navLinks.length - 1) {
			const next = active + 1
			setActive(next)
			refs[next].current.focus()
		}
	}

	return (
		<HeaderMenuStyles className={open ? 'open' : ''}>
			<div
				className="bars"
				onClick={toggleOpen}
				onKeyDown={handleMenuKeyDown}
				role="button"
				tabIndex={0}
				aria-controls="navbar"
			>
				<div id="one" />
				<div id="two" />
				<div id="three" />
			</div>
			<nav id="navbar">
				<ul role="menubar" aria-label="site navigation">
					{navLinks.map((link, idx) => (
						<li key={link.id}>
							{link.isHash ? (
								<Link
									onKeyDown={handleKeyDown}
									href={link.href}
									role="menuitem"
									ref={refs[idx]}
									tabIndex={active === idx ? 0 : -1}
								>
									{link.display}
								</Link>
							) : (
								<PageLink
									className={pathname === link.href ? 'active' : ''}
									onKeyDown={handleKeyDown}
									ref={refs[idx]}
									role="menuitem"
									to={link.href}
									tabIndex={active === idx ? 0 : -1}
								>
									{link.display}
								</PageLink>
							)}
						</li>
					))}
				</ul>
			</nav>
		</HeaderMenuStyles>
	)
}

const HeaderMenuStyles = styled.div`
	.bars {
		position: absolute;
		right: 40px;
		top: 32px;
		height: 32px;
		width: 40px;
		display: grid;
		align-items: center;
		z-index: 10;

		div {
			height: 4px;
			width: 40px;
			background: white;
			transition: transform 0.1s ease;
		}
	}

	ul {
		list-style: none;
		font-weight: 600;
		padding-left: none;
	}

	span[role='button'] {
		${linkStyles}
		font-weight: normal;
	}

	#navbar {
		display: none;
		text-align: center;
		padding-top: 20vh;
		background: black;
		color: white;
		z-index: 10;
	}

	&.open {
		z-index: 102;
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background: var(--black);

		#navbar {
			display: block;
		}

		.bars {
			#one {
				transform: rotate(45deg) translate(6px, 9px);
			}
			#two {
				transform: rotate(-45deg);
			}
			#three {
				transform: rotate(45deg) translate(-10px, -6px);
			}
		}
	}
`

export default HeaderMenu