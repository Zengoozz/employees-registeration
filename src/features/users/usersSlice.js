import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: 1,
        name: 'Nour Eldeen',
        startDate: '20/03/2020',
        phone: '01118025152',
        email: 'noureldeenelqady@gmail.com',
        office: 'Alexandria',
        department: 'Development',
        attendanceProfile: 'Present',
        role: 'Web Developer',
        position: 'Employee',
        directManager: 'Ahmed Tarek',
        workFromHome: false,
        lastModified: sub(new Date(), { minutes: 15 }).toISOString()
    },
    {
        id: 2,
        name: 'Nour Mohamed',
        startDate: '20/05/2020',
        phone: '01118023152',
        email: 'nourmohamed@gmail.com',
        office: 'Alexandria',
        department: 'Business Development',
        attendanceProfile: 'Holiday',
        role: 'HR Head',
        position: 'Employee',
        directManager: 'Ahmed Tarek',
        workFromHome: false,
        lastModified: sub(new Date(), { minutes: 5 }).toISOString()
    },
    {
        id: 3,
        name: 'Ahmed Tarek',
        startDate: '20/05/2019',
        phone: '01116323152',
        email: 'ahmedtarek@gmail.com',
        office: 'Alexandria',
        department: 'Development',
        attendanceProfile: 'On Leave',
        role: 'Development Manager',
        position: 'Manager',
        directManager: '',
        workFromHome: true,
        lastModified: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: 4,
        name: 'Nour Mohamed',
        startDate: '20/05/2020',
        phone: '01118023152',
        email: 'nourmohamed@gmail.com',
        office: 'Alexandria',
        department: 'Business Development',
        attendanceProfile: 'Absent',
        role: 'HR Head',
        position: 'Employee',
        directManager: 'Ahmed Tarek',
        workFromHome: false,
        lastModified: sub(new Date(), { minutes: 5 }).toISOString()
    },
    {
        id: 5,
        name: 'Sara Khaled Ahmed',
        startDate: '20/05/2020',
        phone: '01118023152',
        email: 'nourmohamed@gmail.com',
        office: 'Alexandria',
        department: 'Business Development',
        attendanceProfile: 'Weekend',
        role: 'HR Head',
        position: 'Employee',
        directManager: 'Ahmed Tarek',
        workFromHome: false,
        lastModified: sub(new Date(), { minutes: 5 }).toISOString()
    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdd: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(user) {
                return {
                    payload: {
                        id: nanoid(),
                        name: user.name,
                        startDate: user.startDate,
                        phone: user.phone,
                        email: user.email,
                        office: user.office,
                        department: user.department,
                        attendanceProfile: user.attendanceProfile,
                        role: user.role,
                        position: user.position,
                        directManager: user.directManager,
                        workFromHome: user.workFromHome,
                        lastModified: new Date().toISOString()
                    }
                }
            }
        },
        userDelete: {
            reducer(state, action) {
                return state.filter(user => user.id !== action.payload)
            }
        },
        usersFilter: {
            reducer(state, action) {
                state = state.filter((user) =>
                    user.name.toLowerCase().includes(action.payload)
                )
                return state;
            }
        }

    }
});

export const allUsers = (state) => state.users;
export const { userAdd, userDelete, usersFilter } = usersSlice.actions;
export default usersSlice.reducer