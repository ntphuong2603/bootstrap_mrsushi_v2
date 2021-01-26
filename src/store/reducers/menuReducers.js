import ACTIONS from "../actionTypes";

export default function menuReducers(state=[], action){
    switch (action.type){
        case ACTIONS.GET_MENUS:
            return {...state, ...action.payload}
        case ACTIONS.GET_GATEGORIES:
            return {...state, ...action.payload}
        default:
            return state
    }
}