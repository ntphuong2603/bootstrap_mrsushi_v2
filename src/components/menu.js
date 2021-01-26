import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Arrow } from '../constants/menuName';
import * as menuActions from '../store/actions/menuActions'
import { getFirstLetterCapital } from '../tools/stringTools';
import useViewport from '../tools/viewport';

const Menu = () => {
    const {menus, categories} = useSelector(state=>state.menus)
    const { width } = useViewport()
    const [selectedCat, setSelectedCat] = useState('noodle')
    const [quantity, setQuantity] = useState({})
    
    const dispatch = useDispatch();

    const activeCategory = {
        color:'white', 
        backgroundColor: '#0d6efd',
        fontWeight:'bold'
    }

    useEffect(()=>{
        dispatch(menuActions.getCategoris())
        dispatch(menuActions.getMenus())
    },[])

    const selectItem = () => (
        <div className='container'>
            <select className='form-select'>
                {categories.map((cat)=>(
                    <option key={cat} value={cat}>{getFirstLetterCapital(cat)}</option>
                ))}
            </select>
        </div>
    )

    const tabItem = () => (
        <ul className='nav nav-tabs justify-content-center' id='catTabs'>
            {categories.map((cat)=>(
                <li className='nav-item' role='presentation'>
                    <a className='nav-link' href='' id={cat} data-bs-toggle="tab" role="tab" aria-controls={cat} aria-selected="true"
                        style={selectedCat===cat?activeCategory:{}} onClick={()=>setSelectedCat(cat)}>
                        {getFirstLetterCapital(cat)}
                    </a>
                </li>
            ))}
        </ul>
    )

    const showCategories = () => (
        <>
            <div className='container mt-3 mb-3 d-flex justify-content-evenly' >
                <div className='form-check form-check-inline'>
                    <input type='checkbox' className='form-check-input'/>
                    <label className='form-check-label'>Category</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input type='checkbox' className='form-check-input'/>
                    <label className='form-check-label'>Customer</label>
                </div>
            </div>
            {width < 700 ? selectItem() : tabItem()}
        </>
    )
    
    const addOrder = (menuCode) => {
        if (quantity[menuCode]===undefined){
            quantity[menuCode] = 2
        } else {
            quantity[menuCode] = quantity[menuCode] + 1
        }
        setQuantity({
            ...quantity,
        })
    }

    const subOrder = (menuCode) => {
        quantity[menuCode] = quantity[menuCode] - 1
        setQuantity({
            ...quantity,
        })
    }

    const showMenus = () => (
        <div className='row justify-content-align-content-around'>
            <div className='col-sm col-md-2 col-lg-5'>
                {menus
                    .filter(menu=>menu.cat===selectedCat)
                    .map(menu=>(
                        <div className='card border-primary' style={{width: '45vw'}}>
                            <div className='card-header p-2 '>
                                    {menu.name} {menu.code}
                                <h5 className='card-title text-right mb-0'>
                                    {menu.price} $
                                </h5>
                            </div>
                            <div className='card-footer p-1 d-flex justify-content-between'>
                                <button className='btn btn-primary btn-sm'>Order</button>
                                <div className='btn-group btn-group-sm' role='group'>
                                    <button className='btn btn-danger p-1' onClick={()=>addOrder(menu.code)}>{Arrow.UP}</button>
                                    <label type='text' readOnly className='form-control-sm text-center'>
                                        {quantity[menu.code]===undefined ? 1 : quantity[menu.code]}
                                    </label>
                                    <button className='btn btn-success p-1' disabled={quantity[menu.code]===undefined || quantity[menu.code]===1 ? true : false} onClick={()=>subOrder(menu.code)}>{Arrow.DOWN}</button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )

    return(
        <>
        { categories ? showCategories() : null}
        { menus ? showMenus() : null}
        </>
    )
}

export default Menu;