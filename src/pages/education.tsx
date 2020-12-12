import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Education from '../components/Education'

const EducationPage = () => (
	<Layout>
		<SEO title="education" />
		<main>
			<Education />
		</main>
	</Layout>
)

export default EducationPage
