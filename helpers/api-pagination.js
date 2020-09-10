function getPagingQuery(pageNumber, itemsPerPage) {
	const page = (pageNumber | 0) || 0
	const size = Math.min(Math.max((itemsPerPage | 0) || 8, 1), 100)
	return { size, page }
}

module.exports = { getPagingQuery }