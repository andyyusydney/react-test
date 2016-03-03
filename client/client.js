import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	articles: [{
		id: 1,
		title: "article title 1",
		image: "http://placehold.it/300x250&text=image 1"
	}]
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
	<App/>
  </Provider>,
  document.getElementById('app')
)
