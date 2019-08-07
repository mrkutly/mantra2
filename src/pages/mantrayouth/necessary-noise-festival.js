import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import YouthLayout from "../../components/mantraYouth/Layout"
import About from "../../components/mantraYouth/NecessaryNoise"

export default ({ data }) => (
	<Layout>
		<SEO title="Necessary Noise Festival" />
		<YouthLayout>
			<About image={data.file.childImageSharp.fluid} />
		</YouthLayout>
	</Layout>
)

export const query = graphql`
	query {
		file(relativePath: { eq: "nnf.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
