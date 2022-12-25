import React, { useState, useEffect } from 'react'
import { basedUrl } from '../../../apis/verifiy'
import axios from 'axios'
//style
import { Tabel } from './style'
const TableUser = ({ users, search }) => {
  // state
  // const [users, setUsers] = useState()
  //useEffect
  // useEffect(() => {
  //   axios.get(`${basedUrl}team/user/list`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     }
  //   })
  //     .then(res => setUsers(res.data.users))
  // }, [])
  // useEffect(() => {
  //   fetch(`${basedUrl}team/user/list`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       setUsers(res.data.users)
  //     })
  //     .catch((error) => console.log('error', error));
  // }, [])

  if (!users) {
    return <div style={{ margin: '300px 900px', fontSize: '30px' }}>Loading...</div>;
  }

  return (
    <>
      <Tabel>
        <thead style={{ marginBottom: '16px' }}>
          <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th></th>
            <th>Status</th>
          </tr>
        </thead>
        {
          users.filter(value => {
            if (search === "") {
              return value
            } else if (value.firstName.toLowerCase().includes(search.toLowerCase())) {
              return value
            }
          })
            // users && users.length > 0 && users
            .slice(0,10).map(item => {
              return (
                <tbody style={{height: '101px'}} key={item._id}>
                  <tr>
                    <td style={{ fontWeight: '500' }}> <span className='icon'>{item.firstName[0].toUpperCase()}</span>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.email}</td>
                    <td style={{ textAlign: 'center' }}>{item.balance}</td>
                    <td style={{ color: '#4375FF', textAlign: 'center' }}>{item.role === 1 && 'Team'}</td>
                    <td>
                      <div className='menu'>
                        {(item.verifiedEmail &&
                          item.verifiedMobile &&
                          item.verifiedAddress.status === "approved" &&
                          item.verifiedId.status === "approved") ||
                          (item.verifiedEmail && item.verifiedMobile && item.role === 1) ? (
                          <span style={{ color: "#128807",fontWeight:'500' }}>Verified</span>
                        ) : (
                          <span style={{ color: "#FF0000",fontWeight:'500' }}> Not Verified</span>
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                          <circle cx="16" cy="8" r="2" fill="currentColor" /><circle cx="16" cy="16" r="2" fill="currentColor" /><circle cx="16" cy="24" r="2" fill="currentColor" /></svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })}
      </Tabel>
    </>
  )
}
export default TableUser