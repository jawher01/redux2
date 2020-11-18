import {combineReducers} from "redux"
import {count} from './CountReducer'

export const rootReducer=combineReducers({count:count})