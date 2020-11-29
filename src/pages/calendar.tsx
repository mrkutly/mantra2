import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "../components/Calendar"

const Index = () => (
	<Layout>
		<SEO />
		<main>
			<Calendar />
		</main>
	</Layout>
)

export default Index
