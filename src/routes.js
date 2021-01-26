import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/about'
import Booking from './components/booking'
import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import MainLayout from './components/mainlayout'
import Menu from './components/menu'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/menu' component={Menu}/>
                    <Route path='/booking' component={Booking}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes