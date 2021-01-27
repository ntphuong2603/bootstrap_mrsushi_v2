import axios from 'axios'

const URL = 'http://localhost:5000'

export const getMenus = async () => {
    try {
        const res = await axios.get(`${URL}/menus`)
        if (res.data){
            return {
                menus: res.data
            }
        }
    } catch (error){
        throw error;
    }
}

export const getCategories = async () => {
    try {
        const res = await axios.get(`${URL}/categories`)
        if (res.data){
            return {
                categories: res.data
            }
        }
    } catch (error){
        throw error;
    }
}

export const addQuantity = (shoppingList={}, menuCode) => {
    // console.log('1:',shoppingList);
    if (menuCode===undefined){
        return { shoppingList : shoppingList }
    }

    if (shoppingList[menuCode] === undefined){
        shoppingList[menuCode] = 1
    } 
    shoppingList[menuCode] = shoppingList[menuCode] + 1
    // console.log('2:', shoppingList);
    return { shoppingList : shoppingList }
}

export const delQuantity = (shoppingList, menuCode) => {
    // console.log('1:',shoppingList);
    // if (menuCode===undefined){
    //     return { shoppingList : shoppingList }
    // }

    // if (shoppingList[menuCode] === undefined){
    //     shoppingList[menuCode] = 1
    // } 
    shoppingList[menuCode] = shoppingList[menuCode] - 1
    // console.log('2:', shoppingList);
    return { shoppingList : shoppingList }
}