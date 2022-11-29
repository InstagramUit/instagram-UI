import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken :'',
    display_name:'',
    avatar:'',
    email:'',
}
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateInfoUser(state, action) {
            // state = action.payload
            return action.payload
        },
        resetInfoUser(state) {
            state = initialState
        }
    }
})
const { actions, reducer } = userReducer;
export const { updateInfoUser, resetInfoUser } = actions;

export default reducer;