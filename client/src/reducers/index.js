import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authencationReducer from './auth'

export default combineReducers({
    form: formReducer,
    auth: authencationReducer
});