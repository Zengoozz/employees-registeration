import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialState from "./usersInitialState";


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
        usersSet: {
            reducer(state, action) {
                state = action.payload
                return state;
            }
        },
        usersOrderByExistance: {
            reducer(state){
                return state.slice().sort((a, b) => (b.lastModified).localeCompare(a.lastModified))
            }
        },
        usersOrderByAttendance:{
            reducer(state){
                const attSort = {
                    'Present':0,
                    'On Leave': 1,
                    'Absent': 2,
                    'Weekend': 3,
                    'Holiday': 4,
                }
                return state.slice().sort((a,b) => attSort[a.attendanceProfile] > attSort[b.attendanceProfile])
            }
        }

    }
});

export const allUsers = (state) => state.users;
export const { userAdd, userDelete, usersSet, usersOrderByExistance, usersOrderByAttendance } = usersSlice.actions;
export default usersSlice.reducer