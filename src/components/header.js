import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { MenuIcon, MENU_BAR, MENU_CART, MENU_ICON } from '../constants/menuName';
import { getFirstLetterCapital } from '../tools/stringTools';
import useViewport from '../tools/viewport';

const Header = () => {
    const { total } = useSelector(state=>state.menus)
    const [selectedMenu, setSelectedMenu] = useState(MENU_BAR[0])
    const { width } = useViewport()

    const active = {
        menu:{
            color:'red', 
            backgroundColor:'whitesmoke', 
            borderColor:'whitesmoke', 
            fontWeight:'bold'
        },
    }

    

    const showMenus = () => (
        width < 700 ? 
            menuDropdown(true) 
        : 
        <nav className='nav'>
            {menuItem(false)}
        </nav>
    )
    
    const badgeCart = (isActive) => (
        <span className={isActive?'badge bg-danger rounded-pill':'badge bg-light rounded-pill text-danger'}>
            {total}
        </span>
    )

    const menuItem = (isDropdown) => (
        MENU_BAR.map((menu,index)=>(
            <LinkContainer to={`/${menu}`} key={menu} style={selectedMenu===menu?active.menu:{}}>
                <button className={isDropdown ? 'dropdown-item':'btn m-1 btn-outline-danger active'} onClick={()=>{setSelectedMenu(menu)}}>
                    {isDropdown?MENU_ICON[index]:''}{'  '}
                    {getFirstLetterCapital(menu)} {menu===MENU_CART ? badgeCart(selectedMenu===menu):null}
                </button>
            </LinkContainer>
        ))
    )

    const menuDropdown = (isDropdown) => (
        <div className='dropdown' role='menu'>
            <button className='btn btn-danger' id='dropdownMenu'
                data-bs-toggle="dropdown" aria-expanded="false">
                {MenuIcon}
            </button>
            <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='dropdownMenu'>
                {menuItem(isDropdown)}
            </ul>
        </div>
    )

    return(
        <div className='navbar bg-danger sticky-top'>
            <div className='container'>
                <div className='navbar-brand' color='red'>Mr. Sushi</div>
                {showMenus()}
            </div>
        </div>
    )
}

export default Header;