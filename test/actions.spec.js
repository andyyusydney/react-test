import { expect } from 'chai'
import * as actions from '../redux/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to add a articlesList', () => {
    const pageNum = 1
    const expectedAction = {
      type: 'LOAD_MORE',
      data: {
			articlesList: null,
			pageNum: 1
		}
    }

    expect(actions.default.loadMore(null, pageNum)).to.deep.equal(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates LOAD_MORE when fetching articlesList has been done', (done) => {
    nock('http://localhost:3000')
		.get('/articles/1')
		.reply(200, [
		   {
			  "id": 2,
			  "title": "article title 2",
			  "image": "http://placehold.it/300x250&text=image 2"
		   },
		   {
			  "id": 3,
			  "title": "article title 3",
			  "image": "http://placehold.it/300x250&text=image 3"
		   },
		   {
			  "id": 4,
			  "title": "article title 4",
			  "image": "http://placehold.it/300x250&text=image 4"
		   }
		])

    const expectedActions = [
		{ 
			type: 'LOAD_MORE', 
			data: { 
				articlesList: [
					{
					  "id": 2,
					  "title": "article title 2",
					  "image": "http://placehold.it/300x250&text=image 2"
				   },
				   {
					  "id": 3,
					  "title": "article title 3",
					  "image": "http://placehold.it/300x250&text=image 3"
				   },
				   {
					  "id": 4,
					  "title": "article title 4",
					  "image": "http://placehold.it/300x250&text=image 4"
				   }
				],
				pageNum: 1
			} 
		}
    ]
	
    const store = mockStore({
		articles: [{
			id: 1,
			title: "article title 1",
			image: "http://placehold.it/300x250&text=image 1"
		}],
		pageNum: 0
	}, expectedActions, done)
	
    store.dispatch(actions.default.loadMoreAsync())
  })
})