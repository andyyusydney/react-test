import { applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk)
)(createStore)

export default function configureStore(initialState = { articles: [] }) {
	return finalCreateStore(reducer, initialState)
}