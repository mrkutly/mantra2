import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionHeading from '../components/SectionHeading'
import Logo from '../components/Logo'
import Intro from '../components/Intro'
import Menu from '../components/Menu'

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
			<Intro />
			<Menu />
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
