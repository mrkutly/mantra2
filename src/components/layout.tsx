import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BackgroundImage from "./BackgroundImage"
import message from "./message.js"

const Layout = ({ children }) => {
	useEffect(() => console.log(message), [])

	return (
		<BackgroundImage>
			<div
				style={{
					margin: `0 auto`,
					paddingTop: 0,
				}}
			>
				{children}
			</div>
		</BackgroundImage>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
