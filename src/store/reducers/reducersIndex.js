import { combineReducers } from "redux";
import menus from './menuReducers'

const index = combineReducers({
    menus,
})

export default index;