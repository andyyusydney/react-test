import fetch from 'isomorphic-fetch'

let actions = {
	loadMore: function(articlesList) {
		console.log("articlesList=", articlesList);
		return {
			type: 'LOAD_MORE',
			articlesList: articlesList
		}
	},
	
	loadMoreAsync: function() {
		return (dispatch, getState) => {
			const { articles } = getState()
			
			// request the article list from remote
			fetch('//localhost:3000/articles/2')
				.then(response => {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
					}
					return response.json()
				})
				.then(json => dispatch(actions.loadMore(json)))
		}
	}
}

//store.dispatch(loadMore('aa'))


export default actions