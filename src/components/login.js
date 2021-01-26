import React, { useState } from 'react'
import { LoginIcon, LockIcon } from '../constants/menuName';

const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return(
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 col-lg-4'>
                    <div className='m-3 d-grid' style={{justifyItems:'center'}}>
                        {LockIcon}
                    </div>
                    <form className='mt-3'>
                        <div className='mb-2'>
                            <label className='form-label'>Username</label>
                            <input className='form-control' type='text' placeholder='Enter username' onChange={(val)=>setUser(val)}/>
                        </div>
                        <div className='mb-2 mt-3'>
                            <label className='form-label'>Password</label>
                            <input className='form-control' type='password' placeholder='Enter password' onChange={(val)=>setPass(val)}/>
                        </div>
                        <div className='mb-2 mt-3 form-check'>
                            <input type='checkbox' className='form-check-input'/>
                            <label className='form-check-label'>Remember me</label>
                        </div>
                        <div className='mb-2 mt-3 d-grid'>
                            <button className='btn btn-primary btn-lg' >
                                Login {LoginIcon}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;