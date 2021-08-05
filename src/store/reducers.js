import { combineReducers } from 'redux'
import app from './app/reducer'

export default function rootReducer() {
  return combineReducers({
    app,
  })
}
