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

export const addQuantity = async () => {}