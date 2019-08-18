const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `ConcertsJson`) {
		const slug = createFilePath({
			node,
			getNode,
			basePath: `src/data`,
			trailingSlash: false,
		})
		const year = slug.split("/")[2]
		createNodeField({
			node,
			name: `year`,
			value: year,
		})
	}
}
