import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../../components/Header/Header'
import { basedUrl } from '../../../apis/verifiy'
import TableUser from '../../../components/Users/TableUsers/TableUser'
//style
import { Titel, Container } from './UserStyle'
const User = () => {
  const { register } = useForm()
  // state
  const [open, setOpen] = React.useState(false)
  const [users, setUsers] = useState()
  const [search, setSearch] = useState('')
  //useEffect
  useEffect(() => {
    fetch(`${basedUrl}team/user/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(response => response.json())
      .then(res => {
        setUsers(res.data.users)
      })
      .catch((error) => console.log('error', error));
  }, [])

  const Team = () =>{
      fetch(`${basedUrl}team/user/list?offset=0&sort=-createdAt&isTeam=true&limit=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(response => response.json())
      .then(res => {
        setUsers(res.data.users)
      })
      .catch((error) => console.log('error', error));
  }
  const Blocked = () =>{
    fetch(`${basedUrl}team/user/list?offset=0&sort=-createdAt&isBlocked=true&limit=10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  })
    .then(response => response.json())
    .then(res => {
      setUsers(res.data.users)
    })
    .catch((error) => console.log('error', error));
}
  return (
    <Container>
      <Header />
      <Titel>User Management</Titel>
      {/* <Search /> */}
      <div className='ContainerSearch'>
        <svg className='search' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" /></svg>
        {/* <input type="text" {...register('Search')} placeholder="Search" /> */}
        <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
        <svg onClick={() => setOpen(!open)} className='filter' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z" /></svg>
        {open && (
                <div>
                    <button onClick={Team}>Team members</button>
                    <button onClick={Blocked}>Blocked</button>
                </div>
            )}
      </div>
      <TableUser users={users} search={search} />
    </Container>
  )
}

export default User