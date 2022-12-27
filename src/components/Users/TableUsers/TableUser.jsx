import React, { useState, useEffect } from 'react'
import { basedUrl } from '../../../apis/verifiy'
import axios from 'axios'
//style
import { Tabel } from './style'
import Icons from '../Icons'
const TableUser = ({ users, search }) => {
  // state
  // const [open, setOpen] = useState(false)
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


  if (!users) {
    return <div style={{ margin: '300px 900px', fontSize: '30px' }}>Loading...</div>;
  }
  return (
    <>
      <Tabel>
        <tbody>
          <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th></th>
            <th>Status</th>
          </tr>
          {
            users && users.length > 0 && users.filter(value => {
              if (search === "") {
                return value
              } else if (value.firstName.toLowerCase().includes(search.toLowerCase())) {
                return value
              }
            })
              .slice(0, 10).map((item) => {
                return (
                  <tr style={{ height: '101px' }} key={item._id}>
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
                          <span style={{ color: "#128807", fontWeight: '500' }}>Verified</span>
                        ) : (
                          <span style={{ color: "#FF0000", fontWeight: '500' }}> Not Verified</span>
                        )}
                        <Icons />
                      </div>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </Tabel>
    </>
  )
}
export default TableUser