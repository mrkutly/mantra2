import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from './BackgroundImage'
import message from './message.js'

const Layout = ({ children, isHomePage }) => {
	useEffect(() => console.log(message), [])

	const foreGround = (
		<main
			style={{
				margin: `0 auto`,
				paddingTop: 0,
			}}
		>
			{children}
		</main>
	)

	const withBackgroundImage = <BackgroundImage>{foreGround}</BackgroundImage>

	if (isHomePage) return withBackgroundImage

	return foreGround
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
