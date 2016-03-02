import React, { Component } from 'react'

class ListItem extends Component {
  
  render() {
    return (
		<li>
			<img width="50" height="50" src={this.props.item.image} /> <span>{this.props.item.title}</span>
		</li>	
	)
  }

}

export default ListItem