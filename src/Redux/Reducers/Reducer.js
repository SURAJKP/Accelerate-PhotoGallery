import * as types from '../ActionTypes/Types'

// Initial state
export const initialState = {
    albums: []
};

/* 
Root reducer starts with the initial state
and returns state object for further processing
*/
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.VF_NZ_ALBUMS:
            return { ...state, albums: action.payload };

        case types.VF_NZ_USERLIST:
            return { ...state, users: action.payload };

            case types.VF_NZ_PHOTOLIST:
                return { ...state, photos: action.payload };            

        default:
            return state;
    }
};