import * as types from "../action-types/index"
import axios from "axios"
import { Dispatch } from "redux"
import { baseURL } from '../../service/config'

interface staff {
    id: number
    fullName: string
    email: string
    age: number
}

const getStaffs = (staffs: any) => ({
    type: types.GET_STAFFS,
    payload: staffs
});

const staffDeleted = () => ({
    type: types.DELETE_STAFF
})

const staffAdded = () => ({
    type: types.ADD_STAFF
})

const staffUpdated = () => ({
    type: types.UPDATE_STAFF
})

const getStaff = (staff: staff) => ({
    type: types.GET_SINGLE_STAFF,
    payload: staff
})

export const loadStaffs = () => {
    return function (dispatch: Dispatch) {
        axios.get(baseURL).then((res) => {
            console.log(res);
            dispatch(getStaffs(res.data))
        }).catch(error => {
            console.log(error);
        })

    }
}

export const deleteStaff = (id: number) => {
    return function (dispatch: any) {
        axios.delete(`${baseURL}/${id}`).then((res) => {
            console.log(res);
            dispatch(staffDeleted());
            dispatch(loadStaffs());
        }).catch(error => {
            console.log(error);
        })

    }
}

export const addStaff = (staff: any) => {
    return function (dispatch: Dispatch) {
        axios.post(baseURL, staff).then((res) => {
            console.log(res);
            dispatch(staffAdded());
            // dispatch(loadStaffs());
        }).catch(error => {
            console.log(error);
        })

    }
}

export const getSingleStaff = (id: number) => {
    return function (dispatch: Dispatch) {
        axios.get(`${baseURL}/${id}`).then((res) => {
            console.log(res);
            dispatch(getStaff(res.data));
        }).catch(error => {
            console.log(error);
        })

    }
}

export const updateStaff = (staff: any, id: number) => {
    return function (dispatch: any) {
        axios.put(`${baseURL}/${id}`, staff).then((res) => {
            console.log(res);
            dispatch(staffUpdated());
        }).catch(error => {
            console.log(error);
        })

    }
}