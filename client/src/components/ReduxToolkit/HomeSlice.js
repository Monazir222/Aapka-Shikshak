import { createSlice } from '@reduxjs/toolkit'

const initialState = { ActiveBottomNav: 'Home' }

// console.log(initialState);
const HomeNavbar = createSlice({
    name: "HomeNavbar",
    initialState,
    reducers: 
    {
        ActiveBottomNavRedux(state,action){
            state.ActiveBottomNav = action.payload;
            // console.log(action.payload);
        },
    }
})

export const { ActiveBottomNavRedux } = HomeNavbar.actions;
export default HomeNavbar.reducer;

