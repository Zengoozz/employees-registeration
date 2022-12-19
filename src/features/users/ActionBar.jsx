import React, { useRef } from 'react'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';

import {usersFilter} from '../users/usersSlice'


export default function ActionBar({ handleToggle }) {

const inputRef = useRef('');
const dispatch = useDispatch();

const filterUsers = (event) => {
    dispatch(usersFilter(inputRef.current.value))
}

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
                ref={inputRef}
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
    </div>
)
}
