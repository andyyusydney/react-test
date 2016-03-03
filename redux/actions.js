let actions = {
	loadMore: function(articlesList) {
		return {
			type: 'LOAD_MORE',
			articlesList: articlesList
		}
	}
}

//store.dispatch(loadMore('aa'))


export default actions