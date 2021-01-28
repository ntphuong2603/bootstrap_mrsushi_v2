import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as menuActions from '../store/actions/menuActions'

const Order = () => {
    const { orders } = useSelector(state=>state.menus)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     console.log('Orders:', orders);
    // },[])

    const orderItem = () => (
        orders.map((order)=>(
            <div className='card mt-1'>
                <div className='row g-0'>
                    <div className='col-4'>
                        <img alt='' src={`https://picsum.photos/200?random=${Math.random()}`} style={{maxWidth:'100%',height:'auto'}}/>
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{order.name}</h5>
                            <p className='card-text text-end'>{order.price} * {order.qty} = {' '}
                            <span style={{fontWeight: 'bold', fontSize:'x-large'}}>{order.total.toFixed(2)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )

    return(
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-12 col-md-9 col-lg-7' style={{justifyItems:'center'}}>
                    { orders ? <>
                    {orderItem()}
                    <div className='card mt-1'>
                        <div className='row g-0'>
                            <div className='card-title mt-3 mb-3 col-11'>
                                <h3 className='text-end m-0'>Total: <strong>{orders.reduce((acc,curr)=>(acc+curr.total),0).toFixed(2)}</strong></h3>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-1'>
                        <div className='row g-0'>
                            <div className='btn-group btn-group-lg'>
                                <button className='btn btn-danger col-6'>Cancel</button>
                                <button className='btn btn-primary col-6'>Place order</button>
                            </div>
                        </div>
                    </div>
                    </>:null}
                </div>
            </div>
        </div>
    )
}

export default Order;