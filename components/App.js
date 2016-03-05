import React, { Component } from 'react'
import ArticlesList from './ArticlesList'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    return (
		<div>
			<h1>This is a React Test</h1>
			<ArticlesList actions={this.props.actions} articles={this.props.articles} />
		</div>	
	)
  }

}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)