import React, { Component } from 'react'

class ListItem extends Component {
  
  render() {
    return (
		<div className="list-item">
			<img width="50" height="50" src={this.props.item.image} />
			<span>{this.props.item.title}</span>
		</div>
	)
  }

}

export default ListItem