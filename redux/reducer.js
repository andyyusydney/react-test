let reducer = function(state, action) {
	switch (action.type) {
		case 'LOAD_MORE':
			//console.log("reach the LOAD_MORE action.");
			//console.log("action.articlesList=", action.articlesList);
			let newArticlesList = Object.assign({}, state, {
				articles: [...state.articles, ...action.articlesList]
			});
			
			console.log("newArticlesList=", newArticlesList);
			return newArticlesList;
			break;
		default:
			return state;
			break;
	}
}

export default reducer