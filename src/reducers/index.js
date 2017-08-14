import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import bet from './bet'

export default combineReducers({
    page,
    user,
    bet
})
