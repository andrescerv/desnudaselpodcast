import { createStore, combineReducers } from 'redux'
import Blog from './Components/Blog/Blog'

const reducers = combineReducers({
    Blog
})

const store = createStore(reducers)

export default store;