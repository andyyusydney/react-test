import { expect } from 'chai'
import reducer from '../redux/reducer'

describe('reducer', () => {
	'use strict';

	it('should return the initial state', () => {
		const initialState = {
			articles: [{
				id: 1,
				title: "article title 1",
				image: "http://placehold.it/300x250&text=image 1"
			}],
			pageNum: 0
		}
		
		expect(
		  reducer(initialState, {})
		).to.deep.equal({
			articles: [{
				id: 1,
				title: "article title 1",
				image: "http://placehold.it/300x250&text=image 1"
			}],
			pageNum: 0
		})
	})
	
	it('should handle LOAD_MORE', () => {
		expect(
			reducer({ articles: [] }, {
				type: 'LOAD_MORE',
				data: {
					articlesList: [{
						id: 1,
						title: "article title 1",
						image: "http://placehold.it/300x250&text=image 1"
					}],
					pageNum: 0
				}
			})
		).to.deep.equal(
			{
				articles: [{
					id: 1,
					title: "article title 1",
					image: "http://placehold.it/300x250&text=image 1"
				}],
				pageNum: 0
			}
		)
		
		expect(
			reducer({ articles: [{
					id: 1,
					title: "article title 1",
					image: "http://placehold.it/300x250&text=image 1"
				}] }, {
				type: 'LOAD_MORE',
				data: {
					articlesList: [{
						id: 2,
						title: "article title 2",
						image: "http://placehold.it/300x250&text=image 2"
					}],
					pageNum: 1
				}
			})
		).to.deep.equal(
			{
				articles: [{
					id: 1,
					title: "article title 1",
					image: "http://placehold.it/300x250&text=image 1"
				},{
					id: 2,
					title: "article title 2",
					image: "http://placehold.it/300x250&text=image 2"
				}],
				pageNum: 1
			}
		)
	})
})