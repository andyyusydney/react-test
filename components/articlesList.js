import React, { Component } from 'react'
import ListItem from './ListItem'

class ArticlesList extends Component {
  
  loadMore() {
	  let moreArticles = [
	   {
			id: 2,
			title: "article title 2",
			image: "http://placehold.it/300x250&text=image 2"
		}
	  ];
	  
	  this.props.actions.loadMoreAsync(moreArticles)
  }
  
  render() {
    return (
		<div>
			<ul>
				{
					this.props.articles.map(function(articleItem) {
						return <li><ListItem item={articleItem}/></li>
					})
				}
			</ul>
			<button onClick={this.loadMore.bind(this)}>Load more...</button>
		</div>
	)
  }

}

export default ArticlesList