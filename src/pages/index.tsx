import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionHeading from '../components/SectionHeading'
import Logo from '../components/Logo'

const HomePage = () => (
	<Layout>
		<SEO />
		<IndexHeader>
			<SectionHeading>
				<div />
			</SectionHeading>
		</IndexHeader>
		<main>
			<Logo />
		</main>
	</Layout>
)

const IndexHeader = styled.div`
	margin: 32px;
	@media screen and (max-width: 900px) {
		margin: 0;
	}
`

export default HomePage
