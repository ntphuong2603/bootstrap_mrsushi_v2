import ACTIONS from "../actionTypes";

export default function menuReducers(state=[], action){
    switch (action.type){
        case ACTIONS.GET_MENUS:
            return {...state, ...action.payload}
        case ACTIONS.GET_GATEGORIES:
            return {...state, ...action.payload}
        case ACTIONS.ADD_QUANTITY:
            return {...state, ...action.payload}
        case ACTIONS.SUBSTRACT_QUANTITY:
            return {...state, ...action.payload}
        case ACTIONS.DEL_QUANTITY:
            return {...state, ...action.payload}
        case ACTIONS.PUT_ORDER:
            return {...state, ...action.payload}
        case ACTIONS.GET_ORDER:
            return {...state, ...action.payload}
        case ACTIONS.PLACE_ORDER:
            return {...state, ...action.payload}
        default:
            return state
    }
}