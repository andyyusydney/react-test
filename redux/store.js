import {createStore} from 'redux'
import reducer from './reducer'

export default function configureStore(initialState = { articles: [] }) {
	return createStore(reducer, initialState)
}