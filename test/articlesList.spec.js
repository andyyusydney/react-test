import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import ArticlesList from '../components/articlesList'

function setup() {
  let props = {
    actions: {
		loadMoreAsync: expect.createSpy()
	},
	articles: [
	   {
			id: 2,
			title: "article title 2",
			image: "http://placehold.it/300x250&text=image 2"
		}
	]
  }
  
  

  let renderer = TestUtils.createRenderer()
  renderer.render(<ArticlesList {...props}/>)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('ArticlesList components', () => {
	it('should render correctly', () => {
		const { output } = setup()

		expect(output.type).toEqual('div')
		
		let [ ul, button ] = output.props.children
		
		expect(ul.type).toBe('ul')
		//console.log("ul.props.children=", ul.props.children);
		expect(ul.props.children.length).toBe(1);
		expect(ul.props.children[0].type).toBe('li');
		
		expect(button.type).toBe('button')
		expect(button.props.children).toBe('Load more...')
	})
	
	it('should call onClick if length of text is greater than 0', () => {
      const { output, props } = setup()
      let button = output.props.children[1]
      button.props.onClick()
	  //console.log("button.props.onClick.calls=", button.props.onClick.calls);
      expect(props.actions.loadMoreAsync.calls.length).toBe(1)
    })
})