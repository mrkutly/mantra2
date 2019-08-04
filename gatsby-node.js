const axios = require("axios")

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const { createNode } = actions

	// ? add any new datasources here for the mantraData GQL node
	const biosResponse = await axios.get(`http://localhost:3001/bios`)
	const bios = biosResponse.data

	const albumsResponse = await axios.get(`http://localhost:3001/albums`)
	const albums = albumsResponse.data

	const videosResponse = await axios.get(`http://localhost:3001/videos`)
	const videos = videosResponse.data

	const calendarResponse = await axios.get(`http://localhost:3001/calendar`)
	const calendar = calendarResponse.data

	const articlesResponse = await axios.get(`http://localhost:3001/articles`)
	const articles = articlesResponse.data

	const myData = {
		key: 123,
		calendar,
		bios,
		videos,
		albums,
		articles,
	}

	const nodeContent = JSON.stringify(myData)

	const nodeMeta = {
		id: createNodeId(`mantra-data-${myData.key}`),
		parent: null,
		children: [],
		internal: {
			type: `MantraData`,
			mediaType: `application/json`,
			content: nodeContent,
			contentDigest: createContentDigest(myData),
		},
	}

	const node = Object.assign({}, myData, nodeMeta)
	createNode(node)
}
