import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"

export default ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<div
				style={{
					display: "grid",
					gridTemplateRows: "1fr 1fr 1fr",
					height: "80vh",
				}}
			>
				<Logo />
			</div>
		</Layout>
	)
}
