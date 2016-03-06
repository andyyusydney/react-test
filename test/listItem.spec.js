import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import ListItem from '../components/ListItem'

function setup() {
  let props = {
	item: {
		id: 2,
		title: "article title 2",
		image: "http://placehold.it/300x250&text=image 2"
	}
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<ListItem {...props}/>)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('ListItem components', () => {
	it('should render correctly', () => {
		const { output } = setup()

		expect(output.type).toEqual('div')
		expect(output.props.className).toBe('list-item')
		
		let [ img, span ] = output.props.children
		
		expect(img.type).toBe('img')
		expect(img.props.width).toBe("50")
		expect(img.props.src).toBe("http://placehold.it/300x250&text=image 2")
		
		expect(span.type).toBe('span')
		expect(span.props.children).toBe('article title 2')
	})
})