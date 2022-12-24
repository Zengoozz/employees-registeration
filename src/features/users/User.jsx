import React from 'react';
import { useDispatch } from 'react-redux';

import { faPen, faCirclePause, faTrash, faExclamation, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from '@mui/material/Tooltip';


import { userDelete } from './usersSlice';
import UserToolTip from './UserToolTip';

export default function User({ user }) {

    const dispatch = useDispatch();
    const {
        id,
        name,
        email,
        phone,
        position,
        department,
        attendanceProfile,
        office,
        role,
        directManager,
        startDate
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

    const toolTipInfo = {
        'Office': office,
        'Role': role,
        'Direct Manager': directManager,
        'Start Date': startDate
    }
    const toolTipBody = Object.entries(toolTipInfo).map(([key, value], index) => (
        <UserToolTip key={index} title={key} value={value} />
    ));


    return (
        <div className='user__container'>
            <div className='user__container__left-side'>
                <img className='left-side__img-container'
                    src="" alt="" />
                <span className='left-side__actions'>
                    <button className='left-side__btn btn-edit'>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className='left-side__btn btn-pause'>
                        <FontAwesomeIcon icon={faCirclePause} />
                    </button>
                    <button
                        onClick={handleDeleteUser}
                        className='left-side__btn btn-delete'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </span>
            </div>
            <div className='user__container__right-side'>
                <h2 className='right-side__name' >{name}</h2>
                <p className='right-side__position'>{position}</p>
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
                <a href={`tel:${phone}`}>
                    <button
                        className='right-side__btn btn-phone'>
                        <FontAwesomeIcon icon={faPhone} />
                    </button>
                </a>
                <a href={`mailto:${email}`}>
                    <button
                        className='right-side__btn btn-email'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </a>
                <Tooltip className='tip-tip' title={<div className='tool-tip__container'>{toolTipBody}</div>} arrow>
                    <button
                        className='right-side__btn btn-info'>
                        <FontAwesomeIcon icon={faExclamation} />
                    </button>
                </Tooltip>
            </span>
        </div>
    )
}
