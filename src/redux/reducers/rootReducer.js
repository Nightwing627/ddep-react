// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import itemDetails from './itemDetails'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  itemDetails
})

export default rootReducer
