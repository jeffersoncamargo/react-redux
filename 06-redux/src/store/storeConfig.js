import { combineReducers, createStore } from 'redux'

import minReducer from './min/minReducer'
import maxReducer from './max/maxReducer'

const store = createStore(combineReducers({
    min: minReducer,
    max: maxReducer
}))

export default store

