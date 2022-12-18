import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddUser from './AddUser';
import User from './User';
import { allUsers } from './usersSlice';


export default function UsersList() {

    const [toggle, setToggle] = useState(false)

    const users = useSelector(allUsers)
    // const orderedUsers = users.slice().sort((a, b) => (b.lastModified).localeCompare(a.lastModified))

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='users-list__screen'>
            <button
                className='toggler'
                onClick={handleToggle}>
                Add User
            </button>
            <div className='users-list__container'>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
            {toggle && <AddUser handleToggle={handleToggle} />}
        </div>
    )
}
