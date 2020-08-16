import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Intro from "../components/Intro"
import Next from "../components/Next"
import About from "../components/About"
import Media from "../components/Media"
import Calendar from "../components/Calendar"
import Contact from "../components/Contact"
import Press from "../components/Press"

const Index = () => (
	<Layout isHomePage>
		<SEO title="Home" />
		<div
			style={{
				scrollSnapType: "y mandatory",
				height: "100vh",
				overflow: "scroll",
			}}
		>
			<Logo />
			<Intro />
			<Next />
			<About />
			<Media />
			<Calendar />
			<Press />
			<Contact />
		</div>
	</Layout>
)

export default Index
