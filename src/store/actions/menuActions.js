import ACTIONS from "../actionTypes";
import * as menuApi from '../../apis/menuApis'

export const getMenus = () => ({
    type: ACTIONS.GET_MENUS,
    payload: menuApi.getMenus(),
})

export const getCategoris = () => ({
    type: ACTIONS.GET_GATEGORIES,
    payload: menuApi.getCategories(),
})

export const addQuantity = (cartList={}, menuCode) => ({
    type: ACTIONS.ADD_QUANTITY,
    payload: menuApi.addQuantity(cartList, menuCode)
})

export const subtractQuantity = (cartList={}, menuCode) => ({
    type: ACTIONS.SUBSTRACT_QUANTITY,
    payload: menuApi.subtractQuantity(cartList, menuCode)
})

export const delQuantity = (cartList={}, menuCode) => ({
    type: ACTIONS.ADD_QUANTITY,
    payload: menuApi.delQuantity(cartList, menuCode)
})

export const putOrder = (orders, menuCode, qty, menuInfo, total) => ({
    type: ACTIONS.PUT_ORDER,
    payload: menuApi.putOrder(orders, menuCode, qty, menuInfo, total)
})

export const placeOrder = (orders) => ({
    type: ACTIONS.PLACE_ORDER,
    payload: menuApi.placeOrder(orders)
})

export const getOrder = () => ({
    type: ACTIONS.GET_ORDER,
    payload: menuApi.placeOrder(orders)
})