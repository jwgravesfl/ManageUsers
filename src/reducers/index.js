import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer'


const rootReducer = combineReducers({
  form: formReducer,
  users: UserReducer
})

export default rootReducer