import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Arrow } from '../constants/menuName';
import * as menuActions from '../store/actions/menuActions'
import { getFirstLetterCapital } from '../tools/stringTools';
import useViewport from '../tools/viewport';

const Menu = () => {
    const {menus, categories, shoppingList, orders, total } = useSelector(state=>state.menus)
    const { width } = useViewport()
    const [selectedCat, setSelectedCat] = useState('noodle')
    const [viewCat, setViewCat] = useState(true)
    const [viewCus, setViewCus] = useState(false)
    
    const dispatch = useDispatch();

    const styleCategory = {
        active: {
            color:'white', 
            backgroundColor: '#0d6efd',
            fontWeight:'bold'
        },
        nonActive: {
            borderColor: 'white',
        }        
    }

    useEffect(()=>{
        dispatch(menuActions.getCategoris())
        dispatch(menuActions.getMenus())
        dispatch(menuActions.addQuantity())
        dispatch(menuActions.putOrder(orders))
    },[])

    const handleOrder = (menuCode, menuInfo) => {
        // console.log("Total: ", total);
        dispatch(menuActions.putOrder(orders, menuCode, shoppingList[menuCode], menuInfo[0], total))
        dispatch(menuActions.delQuantity(shoppingList, menuCode))
    }

    const selectItem = () => (
        <div className='container'>
            <select className='form-select' defaultValue={selectedCat} onChange={(event)=>{setSelectedCat(event.currentTarget.value)}}>
                {categories.map((cat)=>(
                    <option key={cat} value={cat}>{getFirstLetterCapital(cat)}</option>
                ))}
            </select>
        </div>
    )
    
    const getQuantity = (menuCode) => (
        shoppingList[menuCode]===undefined ? 0 : shoppingList[menuCode]
    )

    const tabItem = () => (
        <div className='container d-flex justify-content-evenly'>
            {categories.map((cat)=>(
                <button key={cat} className='btn btn-outline-primary' style={selectedCat===cat?styleCategory.active:styleCategory.nonActive} onClick={()=>setSelectedCat(cat)}>
                    {getFirstLetterCapital(cat)}
                </button>
            ))}
        </div>
    )

    const viewMenuBy = () => (
        <div className='container mt-3 mb-3 d-flex justify-content-evenly' >
            <div className='form-check form-check-inline'>
                <input type='checkbox' checked={viewCat} className='form-check-input' onChange={()=>setViewCat(!viewCat)}/>
                <label className='form-check-label'>Category</label>
            </div>
            <div className='form-check form-check-inline'>
                <input type='checkbox' checked={viewCus} className='form-check-input' onChange={()=>setViewCus(!viewCus)}/>
                <label className='form-check-label'>Customer</label>
            </div>
        </div>
    )

    const showCategories = () => (
        <>
            {viewMenuBy()}
            {width < 700 ? selectItem() : tabItem()}
        </>
    )
    
    const showMenus = () => (
        <div className='container justify-content-align-content-around'>
            <div className='row'>
                {menus
                    .filter(menu=>menu.cat===selectedCat)
                    .map((menu,index)=>(
                        <div key={menu.code} className='col col-sm-6 col-md-4 col-lg-3 gx-auto mt-3'>
                            <div className='card border-primary' style={{maxWidth: '40vw'}}>
                                <div className='card-header p-2 '>
                                    {menu.code} - {menu.name}
                                    <h5 className='card-title mb-0'>
                                        {menu.price} $
                                    </h5>
                                </div>
                                <img alt={menu.name} src={`https://picsum.photos/300?random=${Math.random()}`}/>
                                <div className='card-footer p-1 d-flex justify-content-between'>
                                    <button className='btn btn-primary btn-sm' disabled={getQuantity(menu.code) === 0} onClick={()=>handleOrder(menu.code, menus.filter(item=>item.code===menu.code))}>Order</button>
                                    <div className='btn-group btn-group-sm' role='group'>
                                        <button className='btn btn-danger p-1' onClick={()=>dispatch(menuActions.addQuantity(shoppingList, menu.code))}>{Arrow.UP}</button>
                                        <label type='text' readOnly className='form-control-sm text-center'>{getQuantity(menu.code)}</label>
                                        <button className='btn btn-success p-1' disabled={getQuantity(menu.code) === 0} onClick={()=>dispatch(menuActions.subtractQuantity(shoppingList, menu.code))}>{Arrow.DOWN}</button>
                                    </div>
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
        { categories ? showCategories() : null }
        { menus && shoppingList ? showMenus() : null }
        </>
    )
}

export default Menu;