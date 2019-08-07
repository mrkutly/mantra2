import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"

export default () => (
	<Layout>
		<SEO title="Home" />
		<div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
			<Logo />
		</div>
	</Layout>
)
