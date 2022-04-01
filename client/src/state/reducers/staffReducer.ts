import * as types from "../action-types/index"


const initialState = {
    staffs: [],
    staff: {},
    loading: false
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.GET_STAFFS:
            return {
                ...state,
                staffs: action.payload,
                loading: false,
            };
        case types.DELETE_STAFF:
        case types.ADD_STAFF:
        case types.UPDATE_STAFF:
            return {
                ...state,
                loading: false
            };
        case types.GET_SINGLE_STAFF:
            return {
                ...state,
                staff: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;