import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Intro from "../components/Intro"
import Menu from "../components/Menu"
import About from "../components/About"
import Media from "../components/Media"
import Calendar from "../components/Calendar"
import Contact from "../components/Contact"
import Press from "../components/Press"

const Index = () => (
	<Layout isHomePage>
		<SEO />
		<main
			style={{
				scrollSnapType: "y mandatory",
				height: "100vh",
				overflow: "scroll",
			}}
		>
			<Logo />
			<Intro />
			<Menu />
			<About />
			<Media />
			<Calendar />
			<Press />
			<Contact />
		</main>
	</Layout>
)

export default Index
