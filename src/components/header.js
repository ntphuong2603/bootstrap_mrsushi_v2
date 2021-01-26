import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { MenuIcon, MENU_BAR, MENU_ICON } from '../constants/menuName';
import { getFirstLetterCapital } from '../tools/stringTools';
import useViewport from '../tools/viewport';

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(MENU_BAR[0])
    const { width } = useViewport()

    const activeMenu = {
        color:'red', 
        backgroundColor:'whitesmoke', 
        borderColor:'whitesmoke', 
        fontWeight:'bold'
    }

    const showMenus = () => (
        width < 700 ? 
            menuDropdown(true) 
        : 
        <nav className='nav'>
            {menuItem(false)}
        </nav>
    )
    
    const menuItem = (isDropdown) => (
        MENU_BAR.map((menu,index)=>(
            <LinkContainer to={`/${menu}`} key={menu} style={selectedMenu===menu?activeMenu:{}}>
                <button className={isDropdown ? 'dropdown-item':'btn m-1 btn-outline-danger active'} onClick={()=>{setSelectedMenu(menu)}}>
                    {isDropdown?MENU_ICON[index]:''}{'  '}
                    {getFirstLetterCapital(menu)}
                </button>
            </LinkContainer>
        ))
    )

    const menuDropdown = (isDropdown) => (
        <div className='dropdown' role='menu'>
            <button className='btn btn-danger' id='dropdownMenu' type='button'
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