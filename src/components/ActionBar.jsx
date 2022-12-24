import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { allUsers, usersSet, usersOrderByExistance, usersOrderByAttendance } from '../features/users/usersSlice'
import OrderMenu from './OrderMenu';

export default function ActionBar({ handleToggle }) {

    const dispatch = useDispatch();
    const currentUsers = useSelector(allUsers)
    const searchWord = useRef('')
    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState(currentUsers)



    const filterUsers = (event) => {
        const word = event.target.value
        const searchedUsers = users.slice().filter((user) => (user.name).toLowerCase().includes(word.toLowerCase()))
        dispatch(usersSet(searchedUsers))
    }

    const orderByAttendance = () => dispatch(usersOrderByAttendance())
    const orderByNewest = () => dispatch(usersOrderByExistance())

    return (
        <div className='action-bar__container'>
            <span className='search-bar'>
                <FontAwesomeIcon
                    className='search-icon'
                    icon={faSearch} />
                <input
                    type="text"
                    name='search'
                    className='search-input'
                    ref={searchWord}
                    onChange={filterUsers}
                    autoComplete="off"
                    placeholder='Search' />
            </span>
            <button
                className='toggler'
                onClick={handleToggle}>
                <FontAwesomeIcon
                    className='add-icon'
                    icon={faPlus} />
                Add new
            </button>
            <OrderMenu orderByAttendance={orderByAttendance} orderByNewest={orderByNewest}/>
        </div >
    )
}
