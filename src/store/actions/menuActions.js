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

export const addQuantity = (menuCode) => ({
    type: ACTIONS.ADD_QUANTITY,
    payload: {
        menuCode: 1
    }
})