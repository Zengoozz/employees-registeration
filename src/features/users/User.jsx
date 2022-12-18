import React from 'react';
import { useDispatch } from 'react-redux';

import { faPen, faCirclePause, faTrash, faExclamation, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { userDelete } from './usersSlice';

export default function User({ user }) {

    const dispatch = useDispatch();
    const {
        id,
        name,
        role,
        department,
        attendanceProfile
    } = user

    const setAttendanceColor =
        attendanceProfile === 'Absent' ? '#ff6a6a'
            : attendanceProfile === 'On Leave' ? '#8997a4'
                : attendanceProfile === 'Present' ? '#27b40c'
                    : attendanceProfile === 'Weekend' ? '#2764ac'
                        : attendanceProfile === 'Holiday' ? '#23aaeb' : 'black'

    const setAttendanceBGColor =
        attendanceProfile === 'Absent' ? '#ff6a6a29'
            : attendanceProfile === 'On Leave' ? '#8997a429'
                : attendanceProfile === 'Present' ? '#29b50d29'
                    : attendanceProfile === 'Weekend' ? '#2764ac29'
                        : attendanceProfile === 'Holiday' ? '#23aaeb29' : 'black'

    
    const handleDeleteUser = () => {
        dispatch(userDelete(id))
    }

    return (
        <div className='user__container'>
            <div className='user__container__left-side'>
                <img className='left-side__img-container'
                    src="" alt="" />
                <span className='left-side__actions'>
                    <button className='left-side__btn'>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className='left-side__btn'>
                        <FontAwesomeIcon icon={faCirclePause} />
                    </button>
                    <button 
                    onClick={handleDeleteUser}
                    className='left-side__btn'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </span>
            </div>
            <div className='user__container__right-side'>
                <h2 className='right-side__name' >{name}</h2>
                <p className='right-side__role'>{role}</p>
                <p className='right-side__department'>{department}</p>
                <p
                    style={
                        {
                            color: setAttendanceColor,
                            backgroundColor: setAttendanceBGColor
                        }}
                    className='attendance'>
                    {attendanceProfile}
                </p>
            </div>
            <span className='right-side__actions'>
                <button
                    className='right-side__btn'>
                    <FontAwesomeIcon icon={faPhone} />
                </button>
                <button
                    className='right-side__btn'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button
                    className='right-side__btn-info'>
                    <FontAwesomeIcon icon={faExclamation} />
                </button>
            </span>
        </div>
    )
}
