import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer.js'
import currentUserReducer from './reducers/currentUser.js'
import loginFormReducer from './reducers/loginForm.js'

const reducer = combineReducers({
  user: userReducer,
  currentUser: currentUserReducer,
  loginForm: loginFormReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
