import React, {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { Link, Outlet} from 'react-router-dom'


export default function Adminscreen() {

    const userstate = useSelector((state) => state.loginUserReducer);
    const {currentUser} = userstate;
    const dispatch = useDispatch()

    useEffect(() => {

        if(!currentUser.isAdmin){
            window.location.href='/'
        }

    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div>
                    <h2 style={{fontSize:'35px'}}>Admin Panel</h2>
                    <hr/>

                    <ul className="adminfunctions">
                        <li><Link to={'/admin'} style={{color: 'white'}}>Users List</Link></li>
                        <li><Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizzas List</Link></li>
                        <li><Link to={'/admin/addpizza'} style={{color: 'white'}}>Add New Pizza</Link></li>
                        <li><Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
