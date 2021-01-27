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

export const delQuantity = (cartList={}, menuCode) => ({
    type: ACTIONS.ADD_QUANTITY,
    payload: menuApi.delQuantity(cartList, menuCode)
})
