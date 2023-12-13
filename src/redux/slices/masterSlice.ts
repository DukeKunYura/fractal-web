import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    activeLink: 'Home',
    isActivePersonAdder: false,
    isActiveCarAdder: false,
    isActiveCarRegistration: false,
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
    },
});

export const { setSearch, setActiveLink } = masterSlice.actions;

export default masterSlice.reducer;
