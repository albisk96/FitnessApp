function getSearchQuery(query, field) {
	const queries = query.toLowerCase().split(' ');
    const searchQuery = { $or: queries.map(q => ({ [field]: { $regex: q }})) }
	return searchQuery;
}

module.exports = { getSearchQuery }