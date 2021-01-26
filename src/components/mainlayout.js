import React from 'react'

const MainLayout = (props) => {
    return(
        <div className='container full-width'>
            {props.children}
        </div>
    )
}

export default MainLayout;