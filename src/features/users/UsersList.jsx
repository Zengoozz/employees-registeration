import React from 'react'
import { useSelector } from 'react-redux';

import AddUser from './AddUser';
import User from './User';
import { allUsers } from './usersSlice';


export default function UsersList({ toggle, handleToggle }) {


    const users = useSelector(allUsers)

    return (

        <div className='users-list__container'>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
            {toggle && <AddUser handleToggle={handleToggle} />}
        </div>
    )
}
