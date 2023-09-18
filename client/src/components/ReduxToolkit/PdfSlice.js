import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isLoading: true,
    query: "CSS",
    nbPages: 0,
    page: 0,
    hits: [],
};

// console.log(initialState);
const HomeNavbar = createSlice({
    name: "PdfPage",
    initialState,
    reducers: 
    {
        renovePost(state,action){

        },
    }
})

export const { ActiveBottomNav } = HomeNavbar.actions;
export default HomeNavbar.reducer;

