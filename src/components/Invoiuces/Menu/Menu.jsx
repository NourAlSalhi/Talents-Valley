import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
//style
import { Container } from './MenuStyle'
const activeStyle = { color: "#4375FF",borderLeft: '2px solid #4375FF'};
const Menu = () => {
    return (
        <Container>
            <h2>Create</h2>
            <ul>
                <li><NavLink className='link' to='invoiceRecords' style={({ isActive }) =>
                 isActive  ? activeStyle : undefined
                }>Invoice Records</NavLink></li>
                <li><NavLink className='link' to='payoutRecords' style={({ isActive }) =>
                 isActive  ? activeStyle : undefined
                }>Payout Records</NavLink></li>
                <li><NavLink className='link' to='addLink' style={({ isActive }) =>
                 isActive  ? activeStyle : undefined
                }>Add Link</NavLink></li>
            </ul>
            <Outlet />
        </Container>
    )
}

export default Menu