import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './chat/chat.reducers'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store