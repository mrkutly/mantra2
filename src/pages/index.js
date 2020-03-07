import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Intro from "../components/Intro"

export default () => {
	return (
		<Layout isHomePage={true}>
			<SEO title="Home" />
			<div
				style={{
					display: "grid",
					gridTemplateRows: "1fr 1fr 3fr",
					height: "100vh",
				}}
			>
				<Logo />
			</div>
			<Intro />
		</Layout>
	)
}
