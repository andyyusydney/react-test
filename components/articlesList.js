import React, { Component } from 'react'
import ListItem from './ListItem'
import actions from '../redux/actions'

class ArticlesList extends Component {
	/*
  constructor(props, context) {
    super(props, context)
    this.state = {
      articles: [
	   {
			id: 1,
			title: "article title 1",
			image: "http://placehold.it/300x250&text=image 1"
		}
	  ]
    }
  }
  */
  
  
	  
  loadMore() {
	  let moreArticles = [
	   {
			id: 2,
			title: "article title 2",
			image: "http://placehold.it/300x250&text=image 2"
		}
	  ];
	  
	  this.props.dispatch(actions.loadMore(moreArticles))
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