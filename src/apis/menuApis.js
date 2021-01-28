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
    if (menuCode===undefined){
        return { shoppingList : shoppingList }
    }

    if (shoppingList[menuCode] === undefined){
        shoppingList[menuCode] = 0
    } 
    shoppingList[menuCode] = shoppingList[menuCode] + 1
    return { shoppingList : shoppingList }
}

export const subtractQuantity = (shoppingList, menuCode) => {
    shoppingList[menuCode] = shoppingList[menuCode] - 1
    return { shoppingList : shoppingList }
}

export const delQuantity = (shoppingList, menuCode) => {
    shoppingList[menuCode] = 0
    return { shoppingList: shoppingList}
}

export const putOrder = (orders=[], menuCode, qty, menuInfo, total=0) => {
    console.log(menuInfo);
    if (menuCode===undefined){
        return { orders: orders }
    }

    let order = orders.filter(order=>order.code===menuCode)
    if (order.length){
        order[0].qty += 1
    } else {
        order = {
            name: menuInfo.name,
            price: menuInfo.price,
            code: menuCode,
            qty: qty,
            total: menuInfo.price*qty,
        }
    }

    total += qty

    return { orders: [...orders, order], total:  total}
}


export const getOrder = (orders) => {
    return {
        orders: orders
    }
}

export const placeOrder = (orders) => {
    return {
        ordereds: orders
    }
}