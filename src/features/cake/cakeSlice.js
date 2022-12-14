import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) =>{
            state.numberOfCakes -= 1;
        },

        restocked: (state, action) => {
            state.numberOfCakes += action.payload;
        }
    }
})

export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;