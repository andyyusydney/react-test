import React from 'react'
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

function setup() {
	let initialState = {
		articles: [{
			id: 1,
			title: "article title 1",
			image: "http://placehold.it/300x250&text=image 1"
		}],
		pageNum: 0
	}

	let store = configureStore(initialState)

	let renderer = TestUtils.createRenderer()
	renderer.render(<Provider store={store}><App /></Provider>)
	let output = renderer.getRenderOutput()
	
	return {
		output,
		renderer
	}
}

describe('App components', () => {
	it('should render correctly', () => {
		const { output } = setup()
		
		//console.log("output=", output);
		expect(output.type.displayName).to.equal('Connect(App)')
	})
})