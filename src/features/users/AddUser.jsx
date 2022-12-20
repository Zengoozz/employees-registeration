import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userAdd } from './usersSlice';

export default function AddUser({ handleToggle }) {
    const [newUser, setNewUser] = useState({
        name: '',
        startDate: '',
        phone: '',
        email: '',
        office: '',
        department: '',
        attendanceProfile: '',
        role: '',
        position: '',
        directManager: '',
        workFromHome: false,
    })
    const dispatch = useDispatch();

    const offices = ['Alexandria', 'Cairo', 'Dubai'];
    const departments = ['Business Development', 'Development', 'Web Development'];
    const managers = ['Ahmed Tarek', 'Mohamed Tarek'];
    const profiles = ['Absent', 'Present', 'On Leave', 'Holiday', 'Weekend'];

    const optionsFn = (array) => {
        return array.map((ele, index) => (
            <option key={index} value={ele}>
                {ele}
            </option>
        ))
    }

    const officesOptions = optionsFn(offices);
    const departmentsOptions = optionsFn(departments);
    const managersOptions = optionsFn(managers);
    const profilesOptions = optionsFn(profiles);


    const handleAllChanges = (event) => {
        const { name, value } = event.target
        setNewUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleCheck = (event) => {
        const name = event.target.name;
        setNewUser(prevValue => {
            return {
                ...prevValue,
                [name]: !newUser.workFromHome
            }
        })
    }
    const validEmail = newUser.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
    const enableButton = Boolean(newUser.department) && Boolean(newUser.name)
        && Boolean(newUser.startDate) && Boolean(newUser.email) && Boolean(newUser.position)
        && newUser.name !== '' && newUser.startDate !== ''
        && newUser.email !== '' && newUser.department !== ''
        && newUser.position !== '' && newUser.department !== 'Select' &&  Boolean(validEmail)




    const handleUserAdd = () => {
        if (enableButton) {
            console.log(newUser.department)
            dispatch(userAdd(newUser))
            handleToggle();
        }
    }


    return (
        <div className="modal__container">
            <div className='add-user__container'>
                <h2 className='title'>New Employee</h2>
                <h3 className='section__title personal-info'>Personal Info</h3>
                <form className='add-user__form'>


                    <div className="personal-info__container">

                        <div className="personal-info__first-column">
                            <p>drag image here</p>
                        </div>

                        <div className="personal-info__second-column">

                            <label htmlFor="name">Name</label>
                            <input
                                className=''
                                autoComplete='off'
                                id='name'
                                type="text"
                                name='name'
                                value={newUser.name}
                                onChange={handleAllChanges} />

                            <label htmlFor="phone">Phone</label>
                            <input
                                className=''
                                autoComplete='off'
                                id='phone'
                                type="text"
                                name='phone'
                                value={newUser.phone}
                                onChange={handleAllChanges} />

                        </div>

                        <div className="personal-info__third-column">

                            <label htmlFor="startDate">Start Date</label>
                            <input
                                className=''
                                autoComplete='off'
                                id='startDate'
                                type="date"
                                name='startDate'
                                placeholder='20/03/2020'
                                value={newUser.startDate}
                                onChange={handleAllChanges} />

                            <label htmlFor="email">Email</label>
                            <input
                                className=''
                                autoComplete='off'
                                id='email'
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={newUser.email}
                                onChange={handleAllChanges} />
                        </div>
                    </div>


                    <div className="office__container">
                        <h3 className='section__title office'>Office Info</h3>

                        <div className="office-info__row">
                            <label htmlFor="office">Office</label>
                            <select
                                className=''
                                id='office'
                                type="text"
                                name='office'
                                value={newUser.office}
                                onChange={handleAllChanges} >
                                <option value='Select'></option>
                                {officesOptions}
                            </select>

                        </div>
                        <div className="office-info__container">
                            <div className="office-info__first-column">

                                <label htmlFor="department">Department</label>
                                <select
                                    className=''
                                    id='department'
                                    type="text"
                                    name='department'
                                    value={newUser.department}
                                    onChange={handleAllChanges} >
                                    <option value='Select'></option>
                                    {departmentsOptions}
                                </select>

                                <label htmlFor="role">Role</label>
                                <input
                                    className=''
                                    autoComplete='off'
                                    id='role'
                                    type="text"
                                    name='role'
                                    value={newUser.role}
                                    onChange={handleAllChanges} />

                                <label htmlFor="directManager">Direct Manager</label>
                                <select
                                    className=''
                                    id='directManager'
                                    type="text"
                                    name='directManager'
                                    value={newUser.directManager}
                                    onChange={handleAllChanges}>
                                    <option value='Select'></option>
                                    {managersOptions}
                                </select>

                            </div>

                            <div className="office-info__second_column">

                                <label htmlFor="attendanceProfile">Attendance Profile</label>
                                <select
                                    className=''
                                    id='attendanceProfile'
                                    type="text"
                                    name='attendanceProfile'
                                    value={newUser.attendanceProfile}
                                    onChange={handleAllChanges}>
                                    <option value='Select'></option>
                                    {profilesOptions}
                                </select>

                                <label htmlFor="position">Position</label>
                                <input
                                    className=''
                                    autoComplete='off'
                                    id='position'
                                    type="text"
                                    name='position'
                                    value={newUser.position}
                                    onChange={handleAllChanges} />
                            </div>
                        </div>

                    </div>


                    <div className="work">

                        <h3 className='section__title work-home'>Work From Home</h3>
                        <div className="work-home__container">
                            <input
                                className='checkbox'
                                type='checkbox'
                                id='workFromHome'
                                onChange={handleCheck}
                                name='workFromHome' />
                            <label htmlFor="workFromHome">Allow Employee To Work From Home</label>
                        </div>
                        <div className='btns-area'>
                            <button
                                className='form-btn btn-cancel'
                                onClick={handleToggle}
                                type='button'>
                                Cancel
                            </button>
                            <button
                                className='form-btn btn-save'
                                onClick={handleUserAdd}
                                disabled={!enableButton}
                                type='button'>
                                Save
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </div>

    )
}
