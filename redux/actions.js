import fetch from 'isomorphic-fetch'

let actions = {
	loadMore: function(articlesList, pageNum) {
		console.log("loaded articlesList=", articlesList);
		return {
			type: 'LOAD_MORE',
			data: {
				articlesList: articlesList,
				pageNum: pageNum
			}
		}
	},
	
	loadMoreAsync: function() {
		return (dispatch, getState) => {
			let { pageNum } = getState()
			pageNum += 1

			// request the article list from remote
			fetch('//localhost:3000/articles/' + pageNum)
				.then(response => {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
					}
					return response.json()
				})
				.then(json => dispatch(actions.loadMore(json, pageNum)))
				.catch(ex => {
					throw new Error("Error:" + ex);
				})
		}
	}
}

export default actions