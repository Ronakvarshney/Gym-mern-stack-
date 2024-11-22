import { createSlice } from "@reduxjs/toolkit";

export const TokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: null
    },
    reducers: { // corrected to "reducers"
        updateToken: (state, action) => { // added action as a parameter
            state.value = action.payload;
        }
    }
});

export const { updateToken } = TokenSlice.actions;
export default TokenSlice.reducer;
