import React, { Component } from 'react'
import ListItem from './ListItem'

class App extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.state = {
      'item': {
			id: 1,
			title: "article title 1",
			image: "http://placehold.it/300x250&text=image 1"
		}
    }
  }
  
  render() {
    return (
		<div>
			<h1>This is a React Test</h1>
			<ul>
				<ListItem item={this.state.item}/>
			</ul>
		</div>	
	)
  }

}

export default App