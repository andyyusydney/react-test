export default function reducer(state, action) {
	switch (action.type) {
		case 'LOAD_MORE':
			return Object.assign({}, state, {
				articles: [{
					id: 1,
					title: "article title 1",
					image: "http://placehold.it/300x250&text=image 1"
				}, ...state.articles]
			});
			break;
		default:
			return state;
			break;
	}
}