import React, { Component } from 'react'
import ArticlesList from './ArticlesList'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
		<div>
			<h1>This is a React Test</h1>
			<ArticlesList dispatch={this.props.dispatch} articles={this.props.articles} />
		</div>	
	)
  }

}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(App)